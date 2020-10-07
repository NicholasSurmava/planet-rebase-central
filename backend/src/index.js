const express = require("express");
const app = express();
const http = require("http");
const server = http.Server(app);
const querystring = require("querystring");
const path = require("path");

app.use(express.urlencoded({ extended: false }));

app.use(express.static("public/build"));

// console.log(express.static);

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // * redirect to the site_status page for now
  res.redirect("/site_status");
  // res.render("layout");
});

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

module.exports = server;
