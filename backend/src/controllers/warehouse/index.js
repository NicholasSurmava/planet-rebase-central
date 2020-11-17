// TODO: Routes for warehouse (api)
const router = require("express").Router();
const { routes } = require("../../../config");
var faker = require("faker");

const { Site } = require("../../models");
const { User } = require("../../models");

router.get(routes.index + "get_sites", async (req, res, next) => {
  try {
    let newUser = new User(
      faker.name.firstName(),
      faker.name.lastName(),
      faker.internet.userName(),
      faker.internet.password()
    );
    let city = faker.address.city();
    let data = new Site(
      1,
      (location = {
        street_address: faker.address.streetAddress(),
        city: city,
        state: faker.address.state(),
        zip: faker.address.zipCode(),
      }),
      city,
      111111,
      (tech = ["low_speed_data", "high_speed_data", "voice", "emergency"]),
      newUser.userName
    );

    res.json({ data });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;
