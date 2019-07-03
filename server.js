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

// $("#submit").on("click", function(event) {
//     event.preventDefault();
//     var newReservation = {
//       name: $("#name").val().trim(),
//       phoneNumber: $("#phone-number").val().trim(),
//       email: $("#email").val().trim(),
//       uniqueID: $("#unique-id").val().trim()
//     };

//     if (reservations.length <= 5) {
//         $.post("/api/tables", newReservation)
//         .then(function(data) {
//             console.log("add.html", data);
//             alert("Adding character...");
//         });
//     } else {
//         $.post("/api/waitlist", newReservation)
//         .then(function(data) {
//             console.log("add.html", data);
//             alert("Adding character...");
//         });
//     }
// });

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

app.post("/api/tables", function(req, res) {
    var newTable = req.body;
    reservations.push(newTable);
    res.json(newTable);
})

app.post("/api/waitlist", function(req, res) {
    var newTable = req.body;
    waitlist.push(newTable);
    res.json(newTable);
})

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
