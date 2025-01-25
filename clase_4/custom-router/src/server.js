import express from "express";

import { userRouter } from "./routes/user.routes.js";
import { authRouter } from "./routes/auth.routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("*", (req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
