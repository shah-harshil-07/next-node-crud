const { MongoClient } = require('mongodb');
require('dotenv').config();

const CONNECTION_URL = process.env.CONNECTION_URL;
const DATABASE = process.env.DATABASE;

const client = new MongoClient(CONNECTION_URL);
const database = client.db(DATABASE);

module.exports = database;