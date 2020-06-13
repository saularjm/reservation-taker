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

// DATA
let data = {
    reservations = [
        {
            name: "test name",
            phone: "555-867-5309",
            email: "test@test.com",
            uniqueID: this.name
        }
    ],
    waitList = [
        {
            name: "test name2",
            phone: "555-555-5555",
            email: "wait@wait.com",
            uniqueID: this.name
        }
    ]
};

// Route for table data JSON
app.get("/api/tables", function(req, res) {
    return res.json(data);
  });

// Route for waitlist JSON
app.get("/api/waitlist", function(req, res) {
    return res.json(data.waitList);
});

// Route for reservation JSON
app.get("/api/reservations", function(req, res) {
    return res.json(data.reservations);
});

// Route to post new reservation
app.post("/api/tables", function(req, res) {
    let newRes = req.body;
    console.log(newRes);
  
    if (data.reservations.length < 5) {
        data.reservations.push(newRes);
    } else {
        data.waitList.push(newRes);
    }
  
    res.json(data);
  });


// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
