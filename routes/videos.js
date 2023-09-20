const express = require("express");
const router = express.Router();
const fs = require("fs");

function Video(
  id,
  title,
  channel,
  image,
  description,
  views,
  duration,
  video,
  timestamp,
  comments = []
) {
  this.id = id;
  this.title = title;
  this.channel = channel;
  this.image = image;
  this.description = description;
  this.views = views;
  this.duration = duration;
  this.video = video;
  this.timestamp = timestamp;
  this.comments = comments;
}

const videoList = JSON.parse(
  require("fs").readFileSync("./data/videos.json", "utf8")
);

router.get("/:videoid", (req, res) => {
  const videoid = req.params.videoid;
  console.log(videoid);

  for (elem in videoList) {
    console.log(videoList[elem].id);
    if (videoList[elem].id == videoid) {
      res.send(videoList[elem]);
    }
  }
});

module.exports = router;
