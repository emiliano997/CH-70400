import express from "express";

import { wordRouter } from "./routes/word.routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/dictionary", wordRouter);

// Tiene que ser la última ruta
app.use("*", (req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
