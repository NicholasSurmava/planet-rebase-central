const express = require("express");
const app = express();
const http = require("http");
const server = http.Server(app);
const querystring = require("querystring");

app.use(express.urlencoded({ extended: false }));

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    // * redirect to the site_status page for now
  
    // res.render('index');
    res.redirect('/site_status');
  });

app.get("/site_status", (req, res) => {
  res.render('index');
})

app.post("/site_status", (req, res) => {
  let site_id = req.body.site_id;
  res.redirect("/site_status/report?site_id=" + site_id);
})

app.get("/site_status/report", (req, res) => {
    data = {
      site_id: req.query.site_id,
      site_name: "Farts Tower",
      site_type: "Communication Tower",
      location: {
        address: "400 Farts Ave.",
        city: "New Mars City",
        planet: "Mars",
        lat: 42.2009,
        long: -88.2145,
      },
      tech: ["LTE", "CDMA", "EVDO", "VOLTE", "5G"],
      link_type: "HUB",
      related_sites: {
        HOP: 555555,
        HOP_2: 555556,
        TAIL: 555557,
      },
    }
  
  res.render('site_status_report', data)
})

module.exports = server;