import express from "express";
import { configDotenv } from "dotenv";
import apiProjectsRouter from "./api/routes/projects.routes.js"; //router from projects api
import projectsRouter from "./routes/projects.routes.js"; //router from projects
import developersRouter from "./api/routes/developers.routes.js";

configDotenv(); // allows me to use enviroment variables

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// configuring static files
app.use(express.static("public"));

app.use("/api/v1/projects", apiProjectsRouter);
app.use(projectsRouter);
app.use("/api/v1/developers", developersRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log("App running at:", PORT));
