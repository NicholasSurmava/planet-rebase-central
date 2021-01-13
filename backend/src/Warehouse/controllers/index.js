// TODO: Routes for warehouse (api)
const router = require("express").Router();
const { routes } = require("../../../config");
const faker = require("faker");
const { getAllSites, getAllMWSites } = require("../services");

router.get(routes.index + "get_sites", async (req, res, next) => {
  try {
    let data = getAllSites();

    res.json({ data });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;

router.get(routes.index + "get_mw", async (req, res, next) => {
  try {
    let data = getAllMWSites();

    res.json({ data });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});
