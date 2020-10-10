const express = require("express");
const router = express.Router();

router.use(express.static("public/build"));

site = {
  site_id: 111111,
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
};

router.get("/", (req, res) => {
  res.render("site_status/site_status");
});

router.get("/report", (req, res) => {
  if (req.query.site_id) {
    // const query = querystring.stringify({
    //   site_id: req.query.site_id,
    // });

    res.render("site_status/site_status_report", site);
  } else {
    res.send(404);
  }
});

router.post("/report", (req, res) => {
  console.log(req.body.site_id);
  let site_id = req.body.site_id;
  res.redirect("/site_status/report?site_id=" + site_id);
});

module.exports = router;
