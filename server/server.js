const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("es6-promise").polyfill();
require("isomorphic-fetch");

const { handleCreateUser, handleSaveDeck, handleDecks } = require("./handlers");

const app = express();
app.use(helmet());
app.use(morgan("dev"));
app.use(bodyParser.json());
const port = 8000;

app.post("/user", handleCreateUser);

app.post("/decks", handleSaveDeck);

app.post("/home", handleDecks);

const handleFourOhFour = (req, res) => {
  res
    .status(404)
    .json({ message: "Sorry we couldn't find what you were looking for..." });
};

app.get("/*", handleFourOhFour);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
