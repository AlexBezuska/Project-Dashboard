# Project-Dashboard

Displays a web page with cards for each of your projects and buttons for 

* opening project in your editor of choice
* opening the project directory

**...and if the project has a `package.json` file:**
* Author
* Description
* Github link
* Github Issues link

## Instructions

### Building and running the project on your computer

* Install node (instructions for your OS here: https://nodejs.org/en/)
* Clone this repository or download the zip
* In `/routes/home.js` replace this variable with your local project folder's absolute path:
```
var projectsFolder = '/Users/abezuska/projects/';
```

* In `/routes/open.js` replace these variables with your editor of choice and your computers terminal directory open command (ex. 'open' on OSX or 'nautilus' on Ubuntu gnome):
```
var editorCommand = 'atom';
```
* Navigate to the project in your terminal
* Run `npm install` to download the project's dependencies
* Run `npm run start` to start the express server, this will also [open](https://www.npmjs.com/package/open) the project in your browser automatically for you :)

