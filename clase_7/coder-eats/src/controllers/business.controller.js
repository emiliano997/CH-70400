import { businessService } from "../services/business.service.js";

class BusinessController {
  async getAll(req, res) {
    try {
      const businesses = await businessService.getAll();
      res.status(200).json({ businesses });
    } catch (error) {
      res.status(500).json({
        error: "Internal server error",
        details: error,
      });
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;
      const business = await businessService.getById({ id });

      if (!business) {
        return res.status(404).json({
          error: "Business not found",
        });
      }

      res.status(200).json({ business });
    } catch (error) {
      res.status(500).json({
        error: "Internal server error",
        details: error,
      });
    }
  }

  async create(req, res) {
    try {
      const business = await businessService.create({
        business: req.body,
      });

      res.status(201).json({ business });
    } catch (error) {
      res.status(500).json({
        error: "Internal server error",
        details: error,
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const business = await businessService.update({ id, business: req.body });

      if (!business) {
        return res.status(404).json({
          error: "Business not found",
        });
      }

      res.status(200).json({ business });
    } catch (error) {
      res.status(500).json({
        error: "Internal server error",
        details: error,
      });
    }
  }
}

export const businessController = new BusinessController();
