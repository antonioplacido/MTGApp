const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
require("es6-promise").polyfill();
require("isomorphic-fetch");

const app = express();
app.use(helmet());
app.use(morgan("dev"));
const port = 3000;

app.get("/", (req, res) => {
  fetch("https://api.scryfall.com/cards/search?q=id<%3Desper+t%3Ainstant")
    .then((res) => res.json())
    .then((data) => console.log(data));
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
