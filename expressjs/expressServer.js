 // Import the Express.js library
const express = require('express');

// Create an instance of an Express application
const app = new express();

// Initialize an array to store login details
let loginDetails = [];

// Define the root route to send a welcome message
app.get("/", (req, res) => {
    res.send("Welcome to the express server");
});

// Define a route to send login details as a JSON string
app.get("/loginDetails", (req, res) => {
    res.send(JSON.stringify(loginDetails));
});

// Define a route to handle login requests and store login details
app.post("/login/:name", (req, res) => {
    loginDetails.push({ "name": req.params.name, "login_time": new Date() });
    res.send(req.params.name + ", You are logged in!");
});

// Define a dynamic route to greet users by name
app.get("/:name", (req, res) => {
    res.send("Hello " + req.params.name);
});

app.get("/fetchMonth/:number", (req, res) => {

    const months = ["Invalid month number","January", "February", "March", "April", "May", "June", "July","August", "September", "October", "November", "December"];

    const numberInt = parseInt(req.params.number);

    if(Number.isNaN(numberInt) || numberInt < 1 || numberInt > 12){

     return res.status("404").send(months[0]);
    }

    res.send(months[numberInt]);
});


// Start the server and listen on port 3333
app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`);
});