var express = require('express');
var router = express.Router();
var exec = require('child_process').exec;

var editorCommand = 'atom';
var openCommand = 'open';

router.get('/', function(req, res, next) {
  var path = req.query.path;
  var command = req.query.command;
  if (command === "edit"){
    exec(editorCommand + " " + path);
  } else if (command === "open") {
    exec(openCommand + " " + path);
  } else {
    console.log("Unrecognized command in your projects template /views/partials/projects.hbs");
  }

  res.redirect("/");
});


module.exports = router;
