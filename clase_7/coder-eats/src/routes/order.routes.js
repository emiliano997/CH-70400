import { Router } from "express";

import { orderDto } from "../dtos/order.dto.js";
import { orderController } from "../controllers/order.controller.js";
import { validateDto } from "../middlewares/validate-dto.middleware.js";

export const orderRoutes = Router();

orderRoutes.get("/", orderController.getAll);
orderRoutes.get("/:id", orderController.getById);
orderRoutes.post("/", validateDto(orderDto), orderController.create);
orderRoutes.put("/:id/resolve", orderController.resolve);
