var express = require('express');
var router = express.Router();

var projects = [];

const testFolder = '/Users/abezuska/projects/';
const fs = require('fs');
fs.readdir(testFolder, (err, files) => {
  files.forEach(function(file){
    var obj = {};
    if (file.substring(0, 1) == ".") return;
    try{
      var packageJson = require(testFolder + file + "/package.json");
      obj.name = packageJson.name;
      obj.version = packageJson.version;
      var firstName = packageJson.author.split(" ")[0];
      var lastName = packageJson.author.split(" ")[1];
      obj.author = firstName + " " + lastName;
      obj.authorEmail = otherthing(packageJson.author);
      obj.authorWebsite = thisthing(packageJson.author);
      obj.description = packageJson.description;
      obj.github = packageJson.repository.url;
      obj.issues = packageJson.bugs.url;
    }catch(error){
      obj.name = file;
    }
    obj.fileName = file;
    projects.push(obj);
  });
})

router.get('/', function(req, res, next) {
  res.render('home', {
    projects: projects,
    directory: testFolder,
    layout: 'main'});
});

module.exports = router;

function thisthing (txt) {
var re = /\((.*)\)/i;
return txt.match(re)[1]
}

function otherthing (txt) {
var re = /\<(.*)\>/i;
return txt.match(re)[1]
}

// function textBetweenltgt(txt){
//   return txt.match(/\<(.*)\>/)[1];​
// }

var thing = {
  "name": "cluster-junk",
  "version": "0.0.0",
  "description": "Cluster Junk: The Secret of Trash Island",
  "private": true,
  "main": "src/game.js",
  "scripts": {},
  "repository": {
    "type": "git",
    "url": "https://github.com/SplatJS/splat-ecs-starter-project.git"
  },
  "keywords": [],
  "author": "Eric Lathrop <eric@ericlathrop.com> (http://ericlathrop.com/)",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/SplatJS/splat-ecs-starter-project/issues"
  },
  "homepage": "https://github.com/SplatJS/splat-ecs-starter-project",
  "devDependencies": {
    "cordova": "^6.3.1",
    "electron-packager": "^5.2.1",
    "eslint": "^1.10.1",
    "eslint-loader": "^1.1.1",
    "eslint-plugin-json": "^1.2.0",
    "file-loader": "^0.8.5",
    "image-webpack-loader": "^1.6.2",
    "json-loader": "^0.5.4",
    "ncp": "^2.0.0",
    "rimraf": "^2.4.4",
    "webpack": "^1.12.9",
    "webpack-dev-server": "^1.14.0"
  },
  "dependencies": {
    "easing-js": "^1.0.1",
    "splat-ecs": "^7.4.1"
  }
}
