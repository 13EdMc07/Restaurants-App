// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations = [];
var waitlist = [];

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});  

app.get("/reservations", function(req, res) {
    res.sendFile(path.join(__dirname, "reservations.html"));
});  

app.get("/api/tables", function(req, res) {
    return res.json(reservations);
});

app.post("/api/tables", function(req, res) {
    var newReservation = req.body;
    console.log(newReservation);
    reservations.push(newReservation);
    res.json(newReservation);
})

app.post("/api/waitlist", function(req, res) {
    var newReservation = req.body;
    waitlist.push(newReservation);
    res.json(newReservation);
})

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
