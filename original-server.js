const express = require('express');
const bodyParser = require('body-parser');
const bunyan = require('bunyan-sfdx-no-dtrace');
const { join: joinPaths } = require('path');
const { OpenApiValidator } = require('express-openapi-validator');
const passport = require('passport');
const { BasicStrategy } = require('passport-http');

// logger ---------------------------------------------------------------------
const log = bunyan.createLogger({
    name: 'candidates-api',
    serializers: bunyan.stdSerializers,
});

// db -------------------------------------------------------------------------
class Database extends Map {
    set(key, value) {
      if(typeof value === 'string') {
          // BUG: Updated strings in data are truncated to 16 characters
          value = value.substr(0, 16);
      }
      return super.set(key, value);
    }
}
const db = new Database();

function populate() {
    const data = [{
        id: '111111',
        firstName: 'Francis',
        lastName: 'Berrocal',
        vacancyTitle: 'Software Engineer',
        matchingScore: 54,
    }, {
        id: '222222',
        firstName: 'Olga',
        lastName: 'Grytsenko',
        vacancyTitle: 'QA Engineer',
        matchingScore: 67,
    }, {
        id: '333333',
        firstName: 'Robert',
        lastName: 'Szabo',
        vacancyTitle: 'Product Owner',
        matchingScore: 61,
    }, {
        id: '444444',
        firstName: 'Sarah',
        lastName: 'De Lange',
        vacancyTitle: 'Release Worker',
        matchingScore: 98,
    },{
        id: '555555',
        firstName: 'Carlos',
        lastName: 'Benitez',
        vacancyTitle: 'MC',
        matchingScore: 98,
    }];
    for(const datum of data) {
        db.set(datum.id, datum);
    }
}
populate();

// users -----------------------------------------------------------------------

const users = new Map();
users.set('tester', {
    password: 'iloveqa',
    role: 'user',
});

// util -----------------------------------------------------------------------
const generateId = () => Math.random().toString(36).substr(2, 9);
const makeError = (status, message) => {
    const err = new Error(message);
    err.status = status;
    return err;
}

// express setup --------------------------------------------------------------
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// log requeests
app.use((req, res, next) => {
    log.info({ req });
    next();
});

// schema validation
new OpenApiValidator({
    apiSpec: joinPaths(__dirname, 'api.yml'),
    validateRequests: true,
}).install(app);

// auth -----------------------------------------------------------------------
passport.use(new BasicStrategy((username, password, done) => {
    const foundUser = users.get(username);
    const user = foundUser && foundUser.password === password ? foundUser : false;
    return done(null, user);
}));

// API  -----------------------------------------------------------------------

// Get all
app.get('/candidates', (req, res) => {
    // BUG: off by one error and the first candidate in the list is omitted.
    // This might be hard, but by looking at the IDs the curious test might wonder why they start at '2'
    const body = Array.from(db.values());
    res.status(200).json(body.slice(1, body.length));
});

// Get one
app.get('/candidates/:id', (req, res, next) => {
    const { id } = req.params;
    const candidate = db.get(id);

    if(!candidate) {
        // BUG: wrong status code. Should be 404
        return next(makeError(504, `Candidate with ID: "${id}" not found`));
    }
    res.status(200).json(candidate);
});

// Create
app.post('/candidates', passport.authenticate('basic', { session: false }), (req, res, next) => {
    const candidate = req.body;

    // don't allow creating with IDs
    if(candidate.id) {
        return next(makeError(400, 'Cannot set an ID when creating a candidate'));
    }

    Object.assign(candidate, { id: generateId()});
    db.set(candidate.id, candidate);
    // set location header
    res.set('Location', `/candidates/${candidate.id}`);
    res.status(201).json(candidate);
});

// Update
app.put('/candidates/:id', passport.authenticate('basic', { session: false }), (req, res, next) => {
    const { id } = req.params;
    const candidate = db.get(id);

    if(!candidate) {
        return next(makeError(404, `Candidate with ID: "${id}" not found`));
    }
    const update = req.body;
    // BUG: This allows the client to update the ID of a resource. Which is bad.
    db.delete(id);
    db.set((update.id || id), update);
    res.status(200).json(update);
});

// Patch
app.patch('/candidates/:id', passport.authenticate('basic', { session: false }), (req, res, next) => {
    const { id } = req.params;
    const candidate = db.get(req.params.id);

    if(!candidate) {
        return next(makeError(404, `Candidate with ID: "${id}" not found`));
    }
    const update = Object.assign({}, candidate, req.body);
    // BUG: Patch appears to work but doesn't actually update the resource. A future GET will prove this
    res.status(200).json(update);
});

// Delete
// BUG: anonymous users can delete candidates!
app.delete('/candidates/:id', (req, res, next) => {
    const { id } = req.params;

    // BUG: doesn't return a 404, if the ID doesn't exist in the db
    db.delete(id);
    res.sendStatus(204);
});

app.use((err, req, res, next) => {
    log.warn({ err });
    res.status(err.status || 500).json({
        status: err.status,
        massage: err.message, // BUG: typo in "message"
    });
});

const port = 3000;
app.listen(port, () => {
    log.info(`Harver Candidate API now running on ${port}`);
}).on('error', err => {
    if (err.code === 'EADDRINUSE') {
        log.error(`Cannot start server. Something is already running on port http://localhost:${port}`);
        process.exit(1);
    } else {
        log.error({ err }, 'Cannot start server. :(');
    }
});