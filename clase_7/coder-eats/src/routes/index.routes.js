import { Router } from "express";

import { userRoutes } from "./user.routes.js";
import { orderRoutes } from "./order.routes.js";
import { businessRoutes } from "./business.routes.js";

export const router = Router();

router.use("/users", userRoutes);
router.use("/orders", orderRoutes);
router.use("/business", businessRoutes);
