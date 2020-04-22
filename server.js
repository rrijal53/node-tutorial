var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");

var app = express();
app.use(bodyParser.json());
app.get("/hello", function (req, res) {
  res.send("sdsdds");
});

app.post("/login", function (req, res) {
  console.log(req);
  var username = req.body.username;
  var password = req.body.password;
  //todo : connect to databse, check i........
  //read from line
  // seach for username 
  //if found compare username and password
  //sucesss; response user object
  // faile  : message : "incorrect"
  res.send("Hello " + username);
});

app.post("/register", function (req, res) {
  console.log(req);
  var username = req.body.username;
  var password = req.body.password;
  var data = username + "," + password + "\n";
  fs.writeFile("users.txt", data, "utf-8", function (err) {
    if (!err) {
      res.send({
        message: "registered successfully",
      });
    } else {
      res.send({
        message: "unable to register",
      });
    }
  });
  //save to file
});

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
