// TODO: Warehouse services class
const faker = require("faker");
const { Site, User } = require("../models");

let createSites = (count) => {
  let sites = [];

  for (i = 0; i < count; i++) {
    // let newUser = new User(
    //   faker.name.firstName(),
    //   faker.name.lastName(),
    //   faker.internet.userName(),
    //   faker.internet.password()
    // );

    let city = faker.address.city();

    let site = new Site(
      i + 1,
      (location = {
        street_address: faker.address.streetAddress(),
        city: city,
        state: faker.address.state(),
        zip: faker.address.zipCode(),
      }),
      city,
      111111,
      (tech = ["low_speed_data", "high_speed_data", "voice", "emergency"])
      // newUser.userName
    );

    sites.push(site);
  }

  return sites;
};

exports.getAllSites = function () {
  let sites = createSites(20);
  return sites;
};

exports.getAllMWSites = function () {
  let sites = createSites(6);
  return sites;
};
