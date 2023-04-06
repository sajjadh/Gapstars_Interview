Harver QA Exercise
========================

This exercise assesses API testing and WEB test automation skills.

## Background

Harver's new Candidate API has been developed and is almost ready to be released!
But does it live up to Harver's impeccable quality standards? Your mission is to find out...

## Prequisites

You'll need **Node.JS** 12 or 14 + **NPM** installed to setup and run the server.

:warning: Node version above 14 is not working with this server!

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
3. Automate the selected elements using Typescript version of Playwright end to end testing framework.

  Playwright references:
  - [Documentation](https://playwright.dev/docs/intro)
  - [Test API](https://playwright.dev/docs/api/class-test)
4. Create a private project in github and provide us the link with access to it
5. Make sure you have a Readme with instructions inside the project on how to run it

Expectations:
- All the tests should pass
- Test scenarios should be independant from each other
- Each test scenario should have meaningful assertions

Bonus: run tests in different browsers.

## Notes

* The database is mocked in memory. Restart the server to reset the data.
* Some of the API endpoints require [Basic Authentication](https://swagger.io/docs/specification/authentication/basic-authentication/).
  The username is: `tester` and the password is: `iloveqa`.
* We would normally encourage static code analysis to help look for bugs, but for the purpose of this
  exercise, the `server.js` is deliberately obfuscated.