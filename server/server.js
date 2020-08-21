const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
require("es6-promise").polyfill();
require("isomorphic-fetch");

const app = express();
app.use(helmet());
app.use(morgan("dev"));
const port = 3000;

//Below fetch gets all playable commander cards
app.get("/commandercards", (req, res) => {
  fetch("https://api.scryfall.com/cards/search?q=legal%3Acommander")
    .then((res) => res.json())
    .then((data) => console.log("Success"));
  res.send("This brings ESPER instants");
});

app.get("/create/commander", (req, res) => {
  fetch("https://api.scryfall.com/cards/search?q=is%3Acommander")
    .then((res) => res.json())
    .then((data) => res.status(200).json(data));
  res.send("Should show you all commander options");
});

const handleFourOhFour = (req, res) => {
  res
    .status(404)
    .json({ message: "Sorry we couldn't find what you were looking for..." });
};

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
