const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
const uri = process.env.MONGODB_URI;

async function run() {
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const db = client.db("task-manager");
    const collection = db.collection("users");

    // Document to be inserted
    const document = { name: "Prashanth", age: 27 };

    // Insert the document into the collection
    const result = await collection.insertOne(document);

    console.log(`Inserted document with _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}

run().catch(console.error);
