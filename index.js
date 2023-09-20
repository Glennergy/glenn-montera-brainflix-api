// EXPRESS SETUP
require("dotenv").config();
const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
express.static("public");
app.use(express.json());
app.use(cors());

const videos = require("./routes/videos");

const PORT = process.env.PORT || 8080;

const videoList = JSON.parse(
  require("fs").readFileSync("./data/videos.json", "utf8")
);

app.get("/videos", (req, res) => {
  res.json(videoList);
});

app.use("/videos", videos);

app.listen(PORT, () => {
  console.log("listening to http://localhost:8080");
});
