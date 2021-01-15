const router = require("express").Router();
const { routes } = require("../../../config");
const url = require("url");
const fetch = require("node-fetch");
// const { getAllSites } = require("../../services/warehouse");
const { helloMiddleware } = require("../../middleware");

router.use(routes.tower_360_report, helloMiddleware);

router.get(routes.tower_360, async (req, res, next) => {
  try {
    res.render("pages/tower_360", {
      title: "home",
      form_url: routes.tower_360,
      layout: "layouts/layout",
      routes,
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.post(routes.tower_360, async (req, res, next) => {
  try {
    res.redirect(
      url.format({
        pathname: routes.tower_360_report,
        query: {
          site_id: req.body.site_id,
        },
      })
    );
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.get(routes.tower_360_report, async (req, res, next) => {
  try {
    let querystrings = {
      site_id: req.query.site_id,
      city: req.query.city,
    };

    let fake_data = {
      id: 1,
      location: {
        street_address: "500 farts lane",
        city: "New Farts York",
        state: "NFY",
        zip: 65813,
      },
      site_name: "New Farts York",
      site_id: querystrings.site_id,
      tech: ["low_speed_data", "high_speed_data", "voice", "emergency"],
    };

    res.render("pages/tower_360_report", {
      title: fake_data.site_id,
      fake_data,
      routes,
      layout: "layouts/layout",
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.get(routes.tower_360_weather, async (req, res, next) => {
  try {
    const getWeather = await fetch(
      "https://www.metaweather.com/api/location/search/?lattlong=36.96,-122.02"
    )
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
    console.log("getting weather");

    setTimeout(() => {
      res.json(getWeather);
    }, 10000);
  } catch (e) {
    res.status(500).json({
      error: e.message,
    });
  }
});

module.exports = router;
