const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
  console.log("Processing....");

  setTimeout(() => {
    console.log("100% Complete.");
    res.send({ message: "hello world!" });
  }, 2000);
});

module.exports = app;
