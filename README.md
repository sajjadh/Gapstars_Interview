Harver QA Exercise
========================

This exercise assesses API testing skills.

## Background

Harver's new Candidate API has been developed and is almost ready to be released!
But does it live up to Harver's impeccable quality standards? Your mission is to find out...

## Prequisites

You'll need **Node.JS** + **NPM** installed to setup and run the server.

## Setup

First time run the following command:

`npm ci`

To start the server:

`npm start`

You can now access the API at: [http://localhost:3000](http://localhost:3000)

The API specification (how it should work) is detailed in `api.yml`. You can also view the auto-generated documentation
at [`docs/api.html`](file:docs/api.html).

## Tasks

### API test assignment

1. Timebox yourself to 1 hour to find as many defects in the API as you can. 
2. Please share the defects you find in a document or spreadsheet.

### Web UI Automation test assignment

1. Go to https://the-internet.herokuapp.com/
2. Select any five elements from the list
3. Automate the selected elements using any JS based end to end testing framework.
 *Tip!* 
 Selenium (https://www.selenium.dev/documentation/)
 TestCafe (https://testcafe.io/documentation/402634/guides)
 Cypress (https://docs.cypress.io/)
4. Create a project in github and provide us the link
5. Make sure you have a readme with instructions inside the project on how to run it

Expectation: All the tests should pass

## Notes

* The database is mocked in memory. Restart the server to reset the data.
* Some of the API endpoints require [Basic Authentication](https://swagger.io/docs/specification/authentication/basic-authentication/).
  The username is: `tester` and the password is: `iloveqa`.
* We've included the boilerplate code to write Bat feature files, for your convenience.
* We would normally encourage static code analysis to help look for bugs, but for the purpose of this
  exercise, the `server.js` is deliberately obfuscated.