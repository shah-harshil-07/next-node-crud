const { MongoClient } = require('mongodb');
const client = new MongoClient("mongodb://localhost:27017/");
const database = client.db("NextExpress");

module.exports = database;