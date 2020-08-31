const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const scryfall = require("scryfall-client");
const bodyParser = require("body-parser");
require("es6-promise").polyfill();
require("isomorphic-fetch");

const {
  handleCreateUser,
  handleSaveDeck,
  handleGetDecks,
} = require("./handlers");

const app = express();
app.use(helmet());
app.use(morgan("dev"));
app.use(bodyParser.json());
const port = 8000;

app.post("/user", handleCreateUser);

app.post("/decks", handleSaveDeck);

app.get("/decks", handleGetDecks);

const handleFourOhFour = (req, res) => {
  res
    .status(404)
    .json({ message: "Sorry we couldn't find what you were looking for..." });
};

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
