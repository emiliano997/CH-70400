import { Router } from "express";

import { authorize } from "../middlewares/auth.middleware.js";

export const userRouter = Router();

// BD
const users = [
  {
    name: "admin",
    email: "admin@example.com",
    password: "123",
    role: "admin",
  },
  {
    name: "admin2",
    email: "admin2@example.com",
    password: "123",
    role: "admin",
  },
  {
    name: "admin3",
    email: "admin3@example.com",
    password: "123",
    role: "admin",
  },
  {
    name: "user",
    email: "user@example.com",
    password: "123",
    role: "user",
  },
  {
    name: "user2",
    email: "user2@example.com",
    password: "123",
    role: "user",
  },
  {
    name: "user3",
    email: "user3@example.com",
    password: "123",
    role: "user",
  },
];

userRouter.get("/", authorize("user", "admin"), (req, res) => {
  const usersRes = users.filter((user) => user.role === "user");
  res.json(usersRes);
});

userRouter.get("/admin", authorize("admin"), (req, res) => {
  const usersRes = users.filter((user) => user.role === "admin");
  res.json(usersRes);
});
