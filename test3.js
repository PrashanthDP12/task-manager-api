const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://1296prashanth:hgay39etJmlOMJ9r@cluster0.ycdzdrc.mongodb.net/?retryWrites=true&w=majority";

async function run() {
  const client = new MongoClient(url);

  try {
    await client.connect();

    const db = client.db("task-manager");

    // Create collection
    await db.createCollection("users");
    console.log("Collection created!");

    // Insert documents
    const result = await db.collection("users").insertMany([
      { name: "John", age: 30 },
      { name: "Jane", age: 28 },
      { name: "Jack", age: 27 },
    ]);

    console.log(`Inserted ${result.insertedCount} documents`);
  } finally {
    await client.close();
  }
}

run().catch(console.error);
