import { Router } from "express";
import developersController from "../controllers/developers.controller.js";

const developersRouter = Router();

developersRouter.get("/", developersController.getDevelopers);

developersRouter.post("/", developersController.createDeveloper);

developersRouter.get("/:id", developersController.getDeveloperProjects);

export default developersRouter;
