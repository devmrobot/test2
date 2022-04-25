const express = require("express");
const movies = require("./movies");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to my favourite movie list");
});

app.get("/api/movies", (req, res) => {
  res.status(200).json(movies);
});

app.get("/api/movies/:id", (req, res) => {
  const id = req.params.id;
  if (movies[id]) {
    res.status(200).json(movies[id]);
  } else {
    res.status(404).send("not found");
  }
});

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
