var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
var userProfile = require('./demo-json.js')
var app = express();
app.use(bodyParser.json());
app.get("/hello", function (req, res) {
  res.send("sdsdds");
});




app.post("/login", function (req, res) {
  console.log(req);
  var username = req.body.username;
  var password = req.body.password;
  res.send("Hello " + username);
});

app.post("/register", function (req, res) {
  console.log(req);
  var username = req.body.username;
  var password = req.body.password;
  var data = username + "," + password + "\n";
  userProfile.registerUser(username, password, (result) => {
    res.send(result)
  })


var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
