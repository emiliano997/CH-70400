import { contactService } from "../services/contact.service.js";

class ContactController {
  async getAll(req, res) {
    const contacts = await contactService.getAll();
    res.json({ contacts });
  }

  async getById(req, res) {
    const { id } = req.params;

    const contact = await contactService.getById({
      id,
    });

    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.json({ contact });
  }

  async create(req, res) {
    try {
      const contact = await contactService.create({
        contact: req.body,
      });

      res.status(201).json({ contact });
    } catch (error) {
      res.status(500).json({ message: "Error creating contact" });
    }
  }
}

export const contactController = new ContactController();
