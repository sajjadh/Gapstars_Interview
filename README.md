Harver QA Exercise
========================

## Background

Harver's new Candidate API has been developed and is almost ready to be released!
But does it live up to Harver's immpeccable quality standards. Your mission is to find out...

## Prequisites

You'll need **Node.JS** + **NPM** installed to setup and run the server.

## Setup

Ensure your working directory contains the `package.json` file:

`cd build`

First time run the following command:

`npm ci`

To start the server:

`npm start`

You can now access the API at: [http://localhost:3000](http://localhost:3000)

View the docs in [docs/api.html](file:docs/api.html) for more information on how to use the API and how it is expected to operate.

## Tasks

1. Timebox yourself to 1 hour to find as many defects in the API as you can.
2. Automate your work. Write passing automated tests for positive scenarios. *Tip!*, we recommend
[Bat (Behaviorial API Tester)](https://github.com/harver-engineering/bat)
3. Write automated tests that fail to demonstrate the defects you have found in the system.

Please return your completed solution by zipping up this directory and sharing with us the resulting zip file.

## Notes

* The database is mocked in memory. Restart the server to reset the data.
* We've included the boilerplate code to write Bat feature files, for your convenience.
* We would normally encourage static code analysis to help look for bugs, but for the purpose of this
  exercise, the `server.js` is deliberately obfuscated.