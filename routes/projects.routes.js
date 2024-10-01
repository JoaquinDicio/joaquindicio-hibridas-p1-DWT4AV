import express from "express";
import projectsController from "../controllers/projects.controller.js";

const projectsRouter = express.Router();

projectsRouter.get("/projects/", projectsController.getProjects);

projectsRouter.get("/projects/:id", projectsController.getProjectById);

export default projectsRouter;
