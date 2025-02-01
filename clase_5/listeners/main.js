import process from "process";

process.on("exit", (code) => {
  console.log(`Se finalizó el proceso con el siguiente código: ${code}`);
});

process.on("uncaughtException", (err) => {
  console.error(`Se capturó un error: ${err.message}`);
});

process.on("message", (message) => {
  console.log(`Se recibió el siguiente mensaje: ${message}`);
});

console();
