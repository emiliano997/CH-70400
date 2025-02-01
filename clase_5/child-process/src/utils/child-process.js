import { operacionCompleja } from "./operacion-compleja.js";

process.on("message", (message) => {
  console.log(`Proceso iniciado con el siguiente PID: ${process.pid}`);

  // switch (message) {}
  const result = operacionCompleja();

  process.send(result);
});
