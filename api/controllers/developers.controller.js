import { developerService } from "../../services/developers.service.js";

const developersController = {
  async getDevelopers(req, res) {
    try {
      const response = await developerService.getDevelopers();
      res.status(200).send(response);
    } catch (e) {
      res.status(500).send("ERROR", e);
    }
  },

  async createDeveloper(req, res) {
    try {
      const response = await developerService.createDeveloper(req.body);
      res.status(200).send(response);
    } catch (e) {
      res.status(500).send("ERROR", e);
    }
  },

  async getDeveloperProjects(req, res) {
    try {
      if (req.params.id) {
        const response = await developerService.getDeveloperProjects(
          req.params.id
        );
        res.status(200).json(response);
      } else {
        res.status(400).json({ error: "Debe especificar un id de developer" });
      }
    } catch (e) {
      res.status(500).send("ERROR:", e);
    }
  },
};

export default developersController;
