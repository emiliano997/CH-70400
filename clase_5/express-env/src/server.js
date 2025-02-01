import express from "express";

import { CONFIG } from "./config/config.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/config", (req, res) => {
  res.json(CONFIG);
});

app.listen(CONFIG.PORT, () => {
  console.log(`Server listening on port ${CONFIG.PORT}`);
});
