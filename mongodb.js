const { MongoClient, ObjectId } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
const uri = process.env.MONGODB_URI;

// Exploring CRUD Operations on Mongodb using Nodejs

async function run() {
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const db = client.db("task-manager");
    const collectionUsers = db.collection("users");

    // Code to add single document to collection in mongodb
    // Document to be inserted
    // const document = { name: "Tony", age: 28 };
    // const document = { _id: "customid1", age: 28 };
    // Insert the document into the collection
    // const result = await collectionUsers.insertOne(document);
    // console.log(`Inserted document with _id: ${result.insertedId}`);

    // Code to add multiple documents to collection in mongodb
    const collectionTasks = db.collection("tasks");
    // const data2 = [
    //   { description: "Learn AWS", completed: false },
    //   { description: "Learn React", completed: true },
    //   { description: "Learn to cook", completed: false },
    // ];
    // const result2 = await collectionTasks.insertMany(data2);
    // console.log(result2);

    // Code to search for document in collection using id
    // const res1 = await collectionUsers
    //   .find({ _id: new ObjectId("6538cf2a2369ce2abea48c34") })
    //   .toArray();
    // console.log(res1);

    // Code to search for document in collection using particular property other than id
    // const res2 = await collectionTasks
    //   .find({ description: "Learn to cook" })
    //   .toArray();
    // console.log(res2);

    // Code to get all documents in collection
    // const alldocus = await collectionTasks.find({}).toArray();
    // console.log(alldocus);

    // To get count of documents in particular collection
    // const count = await collectionTasks.countDocuments();
    // console.log(count);

    // Updating documents in a collection
    // Define the filter (query) to find the document to update
    // const filter = { name: "Prashanth" };

    // Define the update operation (in this case, updating the age field)
    // const update = { $set: { age: 27 } };

    // Update a SINGLE document that matches the filter
    // const result = await collectionUsers.updateOne(filter, update);

    // console.log(
    //   `Matched ${result.matchedCount} document(s) and modified ${result.modifiedCount} document(s)`
    // );

    // For Multiple documents updation
    // Update all documents that match the filter
    // const result = await collectionUsers.updateMany(filter, update);

    // console.log(
    //   `Matched ${result.matchedCount} document(s) and modified ${result.modifiedCount} document(s)`
    // );

    // Deletion
    // Define the filter (query) to find the document to delete
    const filter = { _id: "customid1" };

    // Delete a single document that matches the filter
    const result = await collectionUsers.deleteOne(filter);

    console.log(`Deleted ${result.deletedCount} document(s)`);
  } finally {
    await client.close();
  }
}

run().catch(console.error);
