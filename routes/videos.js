const express = require("express");
const router = express.Router();
const fs = require("fs");

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
