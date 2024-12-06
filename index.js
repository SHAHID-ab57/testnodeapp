require('dotenv').config()
const express = require("express");
const app = express();
const port = process.env.PORT || 8000

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/test", (req, res) => {
  res.send("Sending all data");
});

app.get("/login", (req, res) => {
  res.send("Login successful");
});

app.get("/logout", (req, res) => {
  res.send("Logout successful");
});

app.listen(port, () => {
  console.log("listening on port :" + port);
});
