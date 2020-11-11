const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const expressLayouts = require("express-ejs-layouts");
const { routes } = require("../config");

const app = express();

// ? Express settings? Or would this be considered middleware as well?
app.use("/static", express.static(path.join(__dirname, "public")));

app.use(expressLayouts);
app.set("layout", path.join(__dirname, "views/layouts/layout"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware for certains
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Index
app.get(routes.index, (req, res, next) => {
  res.redirect(routes.tower_360);
});

// Heartbeat
app.get(routes.heartbeat, (req, res, next) => {
  res.send({ status: "alive" });
});

////////////////////////////////

var tower_360 = require(path.join(__dirname, "controllers/tower_360"));

app.use(routes.tower_360, tower_360);

// /////////////////////////////////

module.exports = app;
