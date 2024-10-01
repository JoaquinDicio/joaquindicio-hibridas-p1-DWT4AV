import projectsService from "../../services/projects.service.js";

const projectsController = {
  async getProjects(req, res) {
    try {
      const filters = req.query;
      const response = await projectsService.getProjects(filters);
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
      const response = await projectsService.getProjectById(req.params.id);

      if (!response) {
        res.status(404).send("Registro no encontrado");
      } else {
        res.status(200).send(response);
      }
    } catch (e) {
      console.log(e);
      res.status(500).send("Internal server error");
    }
  },

  async updateProject(req, res) {
    try {
      const { id } = req.params;
      const response = await projectsService.udpateProject(id, req.body);
      res.status(200).send(response);
    } catch (e) {
      res.status(500).send("Internal server error");
    }
  },

  async deleteProject(req, res) {
    try {
      const { deletedCount } = await projectsService.deleteProject(
        req.params.id
      );
      res.status(200).send(`Se han eliminado: ${deletedCount} registros`);
    } catch (e) {
      res.status(500).send("error eliminando el documento");
    }
  },

  async createNewProject(req, res) {
    try {
      const response = await projectsService.createNewProject(req.body);

      if (response.acknowledged) {
        res.status(200).send(response);
      }
    } catch (e) {
      res.status(500).send("Error creando el nuevo registro");
    }
  },
};

export default projectsController;
