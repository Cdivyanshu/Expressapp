const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("This is my express app");
});

app.get("/me", (req, res) => {
  res.send("Hi I am Laith");
});

app.get("/me/address", (req, res) => {
  res.send("Noida sector 63");
})

app.listen(80, () => {
  console.log("listening");
});