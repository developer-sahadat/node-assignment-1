const userData = require("../user.json");
const fs = require("fs");

module.exports.randomUser = (req, res) => {
  const randomUser = userData[Math.floor(Math.random() * userData.length)];
  res.send(randomUser);
};

module.exports.allUser = (req, res) => {
  res.send(userData);
};

module.exports.userSave = async (req, res) => {
  const existUser = req.body;
  existUser.id = parseInt(existUser.id);
  const data = fs.readFileSync("user.json");
  const users = JSON.parse(data);
  users.push(existUser);
  fs.writeFileSync("user.json", JSON.stringify(users, null));
  res.send({ success: true, msg: "user added successfully" });
};

module.exports.userUpdate = (req, res) => {
  const userID = req.params.id;

  // const data = fs.readFileSync("user.json");
  // const users = JSON.parse(data);
  res.send(userID);
};
