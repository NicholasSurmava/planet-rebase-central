const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const expressLayouts = require("express-ejs-layouts");
const { routes } = require("../config");
const { requestDate } = require("./middleware");

const app = express();

app.use("/static", express.static(path.join(__dirname, "public")));

app.use(expressLayouts);
app.set("layout", path.join(__dirname, "views/layouts/layout"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const tower_360 = require(path.join(__dirname, "controllers/tower_360"));
const warehouse = require(path.join(__dirname, "controllers/warehouse"));

app.use(routes.tower_360, tower_360);
app.use(routes.warehouse, warehouse);

app.use("/", requestDate);

// Index
app.get(routes.index, (req, res, next) => {
  try {
    res.redirect(routes.tower_360);
    // res.send("hello");
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Heartbeat
app.get(routes.heartbeat, (req, res, next) => {
  try {
    res.send({ status: "alive" });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = app;
