const express = require("express");
const app = express();
const http = require("http");
const server = http.Server(app);
const querystring = require("querystring");
const path = require("path");
const expressLayouts = require('express-ejs-layouts')

app.use(express.urlencoded({ extended: false }));

app.use(express.static("./src/static"));

// console.log(express.static);
app.use(expressLayouts);
app.set('layout', './layouts/full_width_layout')
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // * redirect to the site_status page for now
  // res.redirect("/site_status");

    //   TODO: Turn into an object
  let links = ["/site_status", "/api/v1/warehouse", "/heartbeat"];

  res.render("temp", { links: links });
});

// ROUTES
app.use('/site_status', require('./routes/site_status'))
app.use('/api/v1', require('./routes/warehouse'))

// HEARTBEAT ROUTE
app.get("/heartbeat", (req, res) => {
  res.send({ message: "heartbeat" });
});

module.exports = server;
