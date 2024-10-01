import { mongoClient } from "./dbClient.js";

export default async function getMongoCollection(collName, dbName) {
  await mongoClient.connect(); // we wait to be connected to the db
  const db = mongoClient.db(dbName); // we select the db
  const collection = db.collection(collName); //we select the collection
  return collection;
}
