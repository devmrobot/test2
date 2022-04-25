const express = require('express') ;
const app = express() ;
const port = 3000 ;

const movies = require("./movies");

app.get("/", (req, res) => {
    res.send("Welcome to my favourite movie list");
});

app.get("/movies",(req, res) => {
    res.status(200).json(movies);
});

app.get("/movies/:id",(req, res) => {
    res.send(`${req.params.id}`);
    movies.find(id, function (id) {
      if (id) {
        res.status(200).json(movies.id);
      } else {
        res.status(404).send("Not found");
      }
    })
});

app.listen(port, (err) => {
    if (err) {
        console.error('Something bad happened');
    } else {
        console.log(`Server is listening on ${port}`);
    }
});

