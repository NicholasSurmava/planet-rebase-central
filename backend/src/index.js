const express = require("express");
const app = express();
const http = require("http");
const server = http.Server(app);
const querystring = require("querystring");

app.get("/", (req, res) => {
  res.redirect("/site_status");
});

app.get("/site_status", (req, res) => {
  res.send("search site");
});

app.get("/site_status/report", (req, res) => {
  if (req.query.site_id) {
    const query = querystring.stringify({
      site_id: req.query.site_id,
    });
    res.send(`Site id: ${req.query.site_id}`);
  } else {
    res.send(404);
  }
});

module.exports = server;
