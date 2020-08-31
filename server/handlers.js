const { MongoClient } = require("mongodb");
const assert = require("assert");
require("dotenv").config();
const MONGO_URI = process.env.MONGO_URI;
console.log(MONGO_URI);
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

async function handleCreateUser(req, res) {
  console.log(req.body);
  try {
    const client = await MongoClient(MONGO_URI, { useUnifiedTopology: true });
    await client.connect();
    const db = client.db("tolarian");
    const addUser = await db.collection("users").insertOne(req.body);
    assert.equal(1, addUser.insertedCount);
    client.close();
    res.status(201).json({ status: 201, data: req.body });
  } catch ({ message }) {
    res.status(500).json({ status: 500, message });
  }
}

async function handleSaveDeck(req, res) {
  console.log(req.body);
  try {
    const client = await MongoClient(MONGO_URI, { useUnifiedTopology: true });
    await client.connect();
    const db = client.db("tolarian");
    const addDecks = await db.collection("decks").insertOne(req.body);
    assert.equal(1, addDecks.insertedCount);
    client.close();
    res.status(201).json({ status: 201, data: req.body });
  } catch ({ message }) {
    res.status(500).json({ status: 500, message });
  }
}

module.exports = { handleCreateUser, handleSaveDeck };
