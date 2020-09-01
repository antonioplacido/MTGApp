const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("es6-promise").polyfill();
require("isomorphic-fetch");

const {
  handleCreateUser,
  handleSaveDeck,
  handleDecks,
  handleSaveCollection,
  handleCollection,
} = require("./handlers");

const app = express();
app.use(helmet());
app.use(morgan("dev"));
app.use(bodyParser.json());
const port = 8000;

app.post("/user", handleCreateUser);
app.post("/collection", handleSaveCollection);
app.get("/collection/:email", handleCollection);
app.get("/decks/:email", handleDecks);
app.post("/decks", handleSaveDeck);

const handleFourOhFour = (req, res) => {
  res.status(404).json({ message: "Something's wrong with your backend" });
};

app.get("/*", handleFourOhFour);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
