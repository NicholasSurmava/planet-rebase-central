const router = require("express").Router();
const { routes } = require("../../../config");
const url = require("url");

router.get(routes.index, (req, res, next) => {
  res.render("pages/tower_360/tower_360", {
    title: "home",
    form_url: routes.tower_360,
    layout: "layouts/layout",
    routes,
  });
});

router.post(routes.index, (req, res, next) => {
  res.redirect(
    url.format({
      pathname: routes.tower_360_report,
      query: {
        site_id: req.body.site_id,
      },
    })
  );
});

router.get(routes.index + "report", (req, res, next) => {
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

  res.render("pages/tower_360/tower_360_report", {
    title: fake_data.site_id,
    fake_data,
    routes,
    layout: "layouts/layout",
  });
});

module.exports = router;
