import { Router } from "express";

import { Contact } from "../models/contact.model.js";

// Patrón Proxy
// Este router funciona como sustituto de el router de la aplicación principal
export const contactRouter = Router();

contactRouter.get("/", async (req, res) => {
  const contacts = await Contact.find();
  res.json({ contacts });
});

contactRouter.post("/", async (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone)
    return res.status(400).json({
      message: "Missing required fields",
    });

  try {
    const contact = Contact.create({ name, email, phone });

    res.status(201).json({ contact });
  } catch (error) {
    res.status(500).json({ message: "Error creating contact" });
  }
});
