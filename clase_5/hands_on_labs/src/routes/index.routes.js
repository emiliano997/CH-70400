import { Router } from "express";

import { toyRouter } from "./toy.routes.js";
import { userRouter } from "./user.routes.js";

export const router = Router();

router.use("/toys", toyRouter);
router.use("/users", userRouter);
