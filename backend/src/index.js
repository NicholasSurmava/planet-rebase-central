const express = require("express");
const app = express();
const http = require("http");
const server = http.Server(app);

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    // * redirect to the site_status page for now
    // res.redirect("/site_status");
  
    res.render('index');
  });

module.exports = server;