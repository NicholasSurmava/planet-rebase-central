const express = require("express");
const app = express();
const http = require("http");
const server = http.Server(app);
const querystring = require("querystring");
const path = require("path");
const expressLayouts = require('express-ejs-layouts')

app.use(express.urlencoded({ extended: false }));

app.use(express.static("public/build"));

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

// SITE STATUS ROUTES

app.get("/site_status", (req, res) => {
  res.render("site_status/site_status");
});

app.get("/site_status/report", (req, res) => {
  if (req.query.site_id) {
    // const query = querystring.stringify({
    //   site_id: req.query.site_id,
    // });
    res.send(`Site id: ${req.query.site_id}`);
  } else {
    res.send(404);
  }
});

app.post("/site_status/report", (req, res) => {
  console.log(req.body.site_id);
  let site_id = req.body.site_id;
  res.redirect("/site_status/report?site_id=" + site_id);
});

// API ROUTES
app.get("/api/v1/warehouse", (req, res) => {
  res.send({ site_id: "1111111" });
});

// HEARTBEAT ROUTE
app.get("/heartbeat", (req, res) => {
  res.send({ message: "heartbeat" });
});

module.exports = server;
