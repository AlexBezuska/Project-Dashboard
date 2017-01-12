var express = require('express');
var router = express.Router();
var exec = require('child_process').exec;

function exec(path){

}

router.get('/', function(req, res, next) {
  var path = req.query.path;
  var command = req.query.command;
  console.log(command + " " + path);
  exec(command + " " + path);
  res.redirect("/");
});


module.exports = router;
