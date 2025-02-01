import { Router } from "express";

import { toyController } from "../controllers/toy.controller.js";

export const toyRouter = Router();

toyRouter.get("/", toyController.getAll);
toyRouter.get("/:id", toyController.getById);
toyRouter.post("/", toyController.create);
