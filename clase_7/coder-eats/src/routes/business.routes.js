import { Router } from "express";

import { businessDto } from "../dtos/business.dto.js";
import { validateDto } from "../middlewares/validate-dto.middleware.js";
import { businessController } from "../controllers/business.controller.js";

export const businessRoutes = Router();

businessRoutes.get("/", businessController.getAll);
businessRoutes.get("/:id", businessController.getById);
businessRoutes.post("/", validateDto(businessDto), businessController.create);
businessRoutes.put("/:id", businessController.update);
