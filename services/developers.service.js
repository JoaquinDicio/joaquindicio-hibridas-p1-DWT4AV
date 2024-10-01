import getMongoCollection from "../db/getMongoCollection.js";
import { ObjectId } from "mongodb";

const DEVS_COLL = "developers";

export const developerService = {
  async getDeveloperProjects(id) {
    const developersColl = await getMongoCollection(
      DEVS_COLL,
      process.env.PROJECT_DB
    );
    const projectsColl = await getMongoCollection(
      "projects",
      process.env.PROJECT_DB
    );

    if (ObjectId.isValid(id)) {
      //solo prosigue si el id recibido es valido
      const developer = await developersColl.findOne({ _id: new ObjectId(id) });
      const projects = await projectsColl.find({ developer: id }).toArray();
      developer["projects"] = projects;

      return developer;
    }
  },

  async getDevelopers() {
    const developersColl = await getMongoCollection(
      DEVS_COLL,
      process.env.PROJECT_DB
    );
    const cursor = developersColl.find();
    const queryResults = await cursor.toArray();
    return queryResults;
  },

  async createDeveloper(body) {
    const developersColl = await getMongoCollection(
      DEVS_COLL,
      process.env.PROJECT_DB
    );

    const { name, description, img } = body;

    const response = await developersColl.insertOne({
      name: name,
      description: description,
      img: img,
    });

    return response;
  },
};
