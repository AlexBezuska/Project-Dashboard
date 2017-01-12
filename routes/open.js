var express = require('express');
var router = express.Router();
var exec = require('child_process').exec;

var editorCommand = 'atom';

router.get('/', function(req, res, next) {
  var path = req.query.path;
  var command = req.query.command;
  if (command === "edit"){
    exec(editorCommand + " " + path);
  } else {
    exec(command + " " + path);
  }

  res.redirect("/");
});


module.exports = router;
