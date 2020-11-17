// TODO: Base class for Site
const Site = function (id, location, site_name, site_id, tech, created_by) {
  this.id = id;
  this.location = location;
  this.site_name = site_name;
  this.site_id = site_id;
  this.tech = tech;
  this.created_by = created_by;
};

const User = function (firstName, lastName, userName, password) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.userName = userName;
  this.password = password;
};

module.exports = { Site, User };
