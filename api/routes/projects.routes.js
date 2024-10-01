import express from "express";
import projectsController from "../../api/controllers/projects.controller.js";

const projectsRouter = express.Router();

projectsRouter.get("/", projectsController.getProjects);

projectsRouter.get("/:id", projectsController.getProjectById);

projectsRouter.patch("/:id", projectsController.updateProject);

projectsRouter.delete("/:id", projectsController.deleteProject);

projectsRouter.post("/", projectsController.createNewProject);

export default projectsRouter;
