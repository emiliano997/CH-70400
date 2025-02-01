import express from "express";
import { fork } from "child_process";

import { CONFIG } from "./config/config.js";
import { operacionCompleja } from "./utils/operacion-compleja.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/operacion-compleja", (req, res) => {
  const result = operacionCompleja();
  res.json({ result });
});

app.get("/operacion-no-bloqueante", (req, res) => {
  const child = fork("./src/utils/child-process.js");
  child.send("start");

  child.on("message", (message) => {
    res.json({ result: message });
  });
});

app.listen(CONFIG.PORT, () => {
  console.log(`Server listening on port ${CONFIG.PORT}`);
});
