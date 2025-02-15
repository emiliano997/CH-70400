import { Router } from "express";

import { userDto } from "../dtos/user.dto.js";
import { validateDto } from "../middlewares/validate-dto.middleware.js";
import { userController } from "../controllers/user.controller.js";

export const userRoutes = Router();

userRoutes.get("/", userController.getAll);
userRoutes.get("/:id", userController.getById);
userRoutes.post("/", validateDto(userDto), userController.create);
userRoutes.put("/:id", userController.update);
