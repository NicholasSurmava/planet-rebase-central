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
app.set("views", path.join(__dirname, "Tower_360/views"));
// app.set('views', [__dirname + '/viewsFolder1', __dirname + '/viewsFolder2']);
app.set("view engine", "ejs");

// Middleware
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const tower_360 = require(path.join(__dirname, "./Tower_360/controllers"));
const warehouse = require(path.join(__dirname, "./Warehouse/controllers"));

app.use(routes.index, tower_360);
app.use(routes.index, warehouse);

app.use(routes.index, requestDate);

// Index
app.get(routes.index, (req, res, next) => {
  try {
    res.redirect(routes.tower_360);
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
