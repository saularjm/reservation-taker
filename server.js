// Dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing and link external JS
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));


//Basic route that sends the user first to the AJAX page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});
//route to tables html when tables button is pressed
app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});
//route to reserve html when reserve table button is pressed
app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
