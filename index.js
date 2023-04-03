const express = require("express");
const dateFormat = require("date-format");

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.status(200).send("Hello from express server");
});

app.get("/api/v1/instagram", (req, res) => {
  const instaObj = {
    userName: "bhogayata_jay07",
    followers: 100,
    following: 97,
    date: dateFormat("dd-mm-yy hh:mm:ss", new Date()),
  };
  res.status(200).json(instaObj);
});

app.get("/api/v1/facebook", (req, res) => {
  const fbObj = {
    userName: "bhogayata_jay",
    followers: 52,
    following: 56,
    date: dateFormat("dd-mm-yy hh:mm:ss", new Date()),
  };
  res.status(200).json(fbObj);
});

app.get("/api/v1/linkedin", (req, res) => {
  const linkedinObj = {
    userName: "jay bhogayata",
    followers: 100,
    following: 105,
    date: dateFormat("dd-mm-yy hh:mm:ss", new Date()),
  };

  res.status(200).json(linkedinObj);
});

app.get("/api/v1/:param", (req, res) => {
  res.status(200).json({ parma: req.params.param });
});

app.use((req, res, next) => {
  res.status(404).json({ message: "api not found" });
});

app.listen(PORT, () => {
  `express server is running at http://127.0.0.1:${PORT}`;
});
