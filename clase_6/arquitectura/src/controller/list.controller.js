import { listService } from "../services/list.service.js";

class ListController {
  async getAll(req, res) {
    const lists = await listService.getAll();
    res.json({ lists });
  }

  async getById(req, res) {
    const { id } = req.params;

    const list = await listService.getById({
      id,
    });

    if (!list) {
      return res.status(404).json({ message: "List not found" });
    }

    res.json({ list });
  }

  async create(req, res) {
    try {
      const list = await listService.create({
        list: req.body,
      });

      res.status(201).json({ list });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error creating list", details: error.message });
    }
  }
}

export const listController = new ListController();
