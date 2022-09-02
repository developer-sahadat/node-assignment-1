const userData = require("../Utils/user.json");
module.exports.randomUser = (req, res) => {
  const randomUser = userData[Math.floor(Math.random() * userData.length)];
  res.send(randomUser);
};

module.exports.allUser = (req, res) => {
  res.send(userData);
};
