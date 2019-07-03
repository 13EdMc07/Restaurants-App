// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

var reservations = [];
var waitlist = [];

//pushes the information from form
// if (reservations.length <= 5) {
//     reservations.push();
// } else {
//     waitlist.push();
// }

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});  

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});  

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
