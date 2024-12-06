require('dotenv').config()
const express = require("express");
const app = express();
const port = process.env.PORT || 8000

app.get("/", (req, res) => {
  res.send("<h1 style='display: flex; justify-content: center;'>oii ! i love you </h1>"
   
  );
});

app.get("/test", (req, res) => {
  res.send("<h1 style='display: flex; justify-content: center;'>Chalti hai kya 9 sa 12 </h1>");
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
