import { Router } from "express";
import passport from "passport";

import { AuthController } from "../controllers/auth.controller.js";

export const authRouter = Router();

authRouter.post(
  "/login",
  passport.authenticate("login", { session: false }),
  AuthController.login
);

authRouter.post(
  "/register",
  passport.authenticate("register", { session: false }),
  AuthController.register
);

authRouter.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  AuthController.current
);
