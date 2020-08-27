const { MongoClient } = require("mongodb");
const assert = require("assert");
require("dotenv").config();
const MONGO_URI = process.env.MONGO_URI;
console.log(MONGO_URI);
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

module.exports = { handleCreateUser };
