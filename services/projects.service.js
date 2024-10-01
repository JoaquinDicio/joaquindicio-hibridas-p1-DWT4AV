import getMongoCollection from "../db/getMongoCollection.js";
import { ObjectId } from "mongodb";
const PROJECTS_COLL = "projects";

const projectsService = {
  async getProjects(filters) {
    const { name, section } = filters;

    const projectsColl = await getMongoCollection(
      PROJECTS_COLL,
      process.env.PROJECT_DB
    );

    let query = {};
    if (section) {
      query.section = section;
    }

    if (name) {
      if (name) {
        query.name = { $regex: new RegExp(name, "i") }; // here the regExp searchs for partial coincidences too
      }
    }

    const queryResults = await projectsColl.find(query).toArray();

    return queryResults;
  },

  async getProjectById(id) {
    const projectsColl = await getMongoCollection(
      PROJECTS_COLL,
      process.env.PROJECT_DB
    );
    if (ObjectId.isValid(id)) {
      // verifies format of the id obtained from url
      const document = projectsColl.findOne({ _id: new ObjectId(id) });
      return document;
    }
  },

  async udpateProject(id, newData) {
    const projectsColl = await getMongoCollection(
      PROJECTS_COLL,
      process.env.PROJECT_DB
    );

    const updateData = {
      $set: newData,
    };

    const filter = { _id: new ObjectId(id) };
    const response = await projectsColl.updateOne(filter, updateData);
    return response;
  },

  async deleteProject(id) {
    const projectsColl = await getMongoCollection(
      PROJECTS_COLL,
      process.env.PROJECT_DB
    );
    return await projectsColl.deleteOne({ _id: new ObjectId(id) });
  },

  async createNewProject(body) {
    const projectsColl = await getMongoCollection(
      PROJECTS_COLL,
      process.env.PROJECT_DB
    );
    const { name, description, img, link, technologies, section, developer } =
      body;

    const response = await projectsColl.insertOne({
      name: name,
      description: description,
      link: link,
      img: img,
      section: section,
      developer: developer,
      technologies: technologies,
    });

    return response;
  },
};

export default projectsService;
