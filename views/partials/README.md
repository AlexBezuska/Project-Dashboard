# Project-Dashboard

Displays a web page with cards for each of your projects and buttons for

## Instructions

### Building and running the project on your computer

* Install node (instructions for your OS here: https://nodejs.org/en/)
* Clone this repository or download the zip
* In `/routes/home.js` replace this variable with your local project folder's absolute path:
```
var testFolder = '/Users/abezuska/projects/';
```

* In `/routes/open.js` replace this variable with your local project folder's absolute path:
```
var editorCommand = 'atom';
```
* Navigate to the project in your terminal
* Run `npm install` to download the project's dependencies
* Run `npm run start` to start the express server, this will also [open](https://www.npmjs.com/package/open) the project in your browser automatically for you :)

