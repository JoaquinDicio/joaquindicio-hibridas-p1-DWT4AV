import projectsService from "../services/projects.service.js";
import projectsViews from "../views/projectsView.js";

const projectsController = {
  async getProjects(req, res) {
    try {
      const projects = await projectsService.getProjects(req.query);

      const response = projectsViews.useLayout(
        "Proyectos",
        projectsViews.createList(projects),
        "/projects.js"
      );

      res.status(200).send(response);
    } catch (e) {
      console.log(e);
      res
        .status(500)
        .send("Internal server error: error conectando con la base de datos");
    }
  },

  async getProjectById(req, res) {
    try {
      const project = await projectsService.getProjectById(req.params.id);
      if (!project) {
        res.status(404).send("Proyecto no encontrado");
      } else {
        const response = projectsViews.useLayout(
          project.name,
          projectsViews.createDetailPage(project)
        );

        res.status(200).send(response);
      }
    } catch (e) {
      console.log(e);
      res.status(500).send("Internal server error");
    }
  },
};

export default projectsController;
