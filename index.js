const express = require("express");

const port = process.env.PORT || 5000;
var cors = require("cors");
var app = express();
const userRouter = require("./Routers/user.router.js");
const bodyParser = require("body-parser");
// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

// route
app.use("/user", userRouter);

//start server

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.all("*", (req, res) => {
  res.send("Route Not Found");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
