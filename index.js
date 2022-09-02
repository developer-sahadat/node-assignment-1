const express = require("express");
const port = 5000;
var cors = require("cors");
var app = express();
const userRouter = require("./Routers/user.router.js");

app.use(cors());
app.use(express.json());

app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.all("*", (req, res) => {
  res.send("Route Not Founded");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
