import { MongoClient, ServerApiVersion } from "mongodb";

const uri =
  "mongodb+srv://joacodicio:joaco123@cluster0.0qhlt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// this creates a mongo client instance
export const mongoClient = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
