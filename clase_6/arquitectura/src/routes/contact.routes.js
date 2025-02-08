import { Router } from "express";

import { contactDto } from "../dtos/contact.dto.js";
import { validate, validateId } from "../middleware/validate.middleware.js";
import { contactController } from "../controller/contact.controller.js";

// Patrón Proxy
// Este router funciona como sustituto de el router de la aplicación principal
export const contactRouter = Router();

contactRouter.get("/", contactController.getAll);
contactRouter.get("/:id", validateId, contactController.getById);
contactRouter.post("/", validate(contactDto), contactController.create);
