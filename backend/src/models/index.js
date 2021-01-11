const User = function (firstName, lastName, userName, password) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.userName = userName;
  this.password = password;
};

module.exports = { User };
