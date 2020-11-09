const express = require("express");
const path = require("path");

const app = express();

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

console.log(app.locals.settings);

// controller
app.get("/", (req, res, next) => {
  // model
  let metaData = {
    title: "Home",
  };

  // services
  setTimeout(() => {
    console.log("Gathering some data... 10%");
  }, 2000);

  setTimeout(() => {
    console.log("Gathering some data... 20%");
  }, 4000);

  setTimeout(() => {
    console.log("Gathering some data... 60%");
  }, 6000);

  setTimeout(() => {
    console.log("Gathering some data... 80%");
  }, 8000);

  setTimeout(() => {
    console.log("Here you go! 100% Complete.");
    // View
    res.render("index", { message: "hello world", metaData });
  }, 10000);
});

module.exports = app;
