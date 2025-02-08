import { Router } from "express";

import { listDto } from "../dtos/list.dto.js";
import { listController } from "../controller/list.controller.js";
import { validate, validateId } from "../middleware/validate.middleware.js";

export const listRouter = Router();

listRouter.get("/", listController.getAll);
listRouter.get("/:id", validateId, listController.getById);
listRouter.post("/", validate(listDto), listController.create);
