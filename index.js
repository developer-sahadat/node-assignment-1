const express = require("express");

const port = process.env.PORT || 5000;
var cors = require("cors");
var app = express();
const userRouter = require("./Routers/user.router.js");
const bodyParser = require("body-parser");
const youtube = require("youtube-api");
const uuid = require("uuid");
const open = require("open");
const multer = require("multer");
const fs = require("fs");

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

const credentials = require("./client_secret.json");

// // route
// app.use("/user", userRouter);

const oAuth = youtube.authenticate({
  type: "oauth",
  client_id: credentials.web.client_id,
  client_secret: credentials.web.client_secret,
  redirect_url: credentials.web.redirect_uris[0],
});

const storage = multer.diskStorage({
  destination: "./",
  filename(req, file, cb) {
    const newFileName = `${uuid()}-${file.originalname}`;
    cb(null, newFileName);
  },
});

const uploadVideoFile = multer({
  storage: storage,
}).single("videoFile");

app.post("/upload", uploadVideoFile, (req, res) => {
  console.log(req.videoFile);
  if (req.videoFile) {
    console.log("hi");
    // const fileName = req.file.filename;
    const { title, videoFile } = req.body;
    console.log();
    open(
      oAuth.generateAuthUrl({
        access_type: "offline",
        scope: ["https://www.googleapis.com/auth/youtube.upload"],
        state: JSON.stringify({
          videoFile,
          title,
        }),
      })
    );
  }
});

app.get("/upload", (req, res) => {
  res.redirect("http://localhost:3000/success");
  const { fileName, title } = JSON.parse(req.query.state);
  oAuth.getToken(req.query.code, (err, tokens) => {
    if (err) {
      console.log(err);
      return;
    }
    oAuth.setCredentials(tokens);
    youtube.video.insert(
      {
        resource: {
          snippet: { title },
          status: { privacyStatus: "private" },
        },
        part: "snippet,status",
        media: {
          body: fs.createReadStream(fileName),
        },
      },
      (err, data) => {
        console.log("done");
        process.exit();
      }
    );
  });
});

//start server
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.all("*", (req, res) => {
  res.send("Route Not Founded");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// https://hidden-savannah-45936.herokuapp.com/
