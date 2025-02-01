import { isValidObjectId } from "mongoose";
import { userService, toyService } from "../services/index.service.js";

class UserController {
  async getAll(req, res) {
    try {
      const users = await userService.getAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;

      const user = await userService.getById({ id });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async create(req, res) {
    try {
      const { username, email, phone, toys } = req.body;

      if (!username || !email || !phone) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      const toysNotFound = [];

      for (const toyId of toys) {
        const toy = await toyService.getById({ id: toyId });

        if (!toy) {
          toysNotFound.push(toyId);
        }
      }

      if (toysNotFound.length) {
        return res
          .status(404)
          .json({ message: `Toys not found: ${toysNotFound.join(", ")}` });
      }

      const user = await userService.create({
        user: {
          username,
          email,
          phone,
          toys,
        },
      });

      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // TODO: Implement this method
  async addToy(req, res) {}
}

export const userController = new UserController();
