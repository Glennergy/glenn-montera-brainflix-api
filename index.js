// EXPRESS SETUP
require("dotenv").config();
const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
const uuid = require("uuid");
app.use("/public", express.static("./public"));
app.use(express.json());
app.use(cors());

const videos = require("./routes/videos");

const PORT = process.env.PORT || 8080;

const videoList = JSON.parse(
  require("fs").readFileSync("./data/videos.json", "utf8")
);

function Video(title, description) {
  this.id = uuid.v4();
  this.title = title;
  this.channel = "BrainStation";
  this.image = "http://localhost:8080/public/images/Upload-video-preview.jpg";
  this.description = description;
  this.views = 0;
  this.duration = "1:30";
  this.video = "https://project-2-api.herokuapp.com/stream";
  this.timestamp = new Date();
  this.comments = [];
}

app.get("/videos", (req, res) => {
  res.json(videoList);
});

app.use("/videos", videos);

app.post("/videos", (req, res) => {
  const newVideo = new Video(req.body.newtitle, req.body.newdescription);
  console.log(req);
  videoList.push(newVideo);
  fs.writeFileSync("./data/videos.json", JSON.stringify(videoList));
  res.send(newVideo);
});

app.listen(PORT, () => {
  console.log("listening to http://localhost:8080");
});
