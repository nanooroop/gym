const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

HTTP_PORT = process.env.PORT || 8080;

app.use(express.static("views"));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"));
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/about.html"));
});

app.get("/membership", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/membership.html"));
});

app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/contact.html"));
});

app.get("/schedule", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/schedule.html"));
});

app.listen(HTTP_PORT, () => {
    console.log("listening on port " + HTTP_PORT);
});