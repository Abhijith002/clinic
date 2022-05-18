import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "GET") {
    // Process a GET request
    const URL = "mongodb://localhost:27017";
    // Create a new MongoClient
    const client = new MongoClient(URL);
    try {
      await client.connect();
      // Establish and verify connection
      const result = await client
        .db("medic")
        .collection("slots")
        .find({
          date: {
            $gte: new Date(
              new Date().setHours(Number("00"), Number("00"), Number("00"))
            ),
          },
        });
      res.status(200).json(await result.toArray());
    } finally {
      await client.close();
    }
  } else {
    // Handle any other HTTP method
    console.error("Invalid HTTP method");
  }
}
