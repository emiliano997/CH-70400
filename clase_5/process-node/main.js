// console.log(process.cwd()); // Obtenemos la ruta del directorio actual
// console.log(process.pid); // Obtenemos el ID del proceso
// console.log(process.memoryUsage()); // Obtenemos la cantidad de memoria que está utilizando el proceso
// console.log(process.env); // Obtenemos las variables de entorno del sistema
// console.log(process.argv); // Obtenemos los argumentos que se pasan al ejecutar el script
// console.log(process.version); // Obtenemos la versión de Node.js

// const argv = process.argv.slice(2);
// console.log(argv);

// ----------------------------
// Commander
// ----------------------------
import { Command } from "commander";

const program = new Command();

program
  .option("-d, --debug", "Habilitar el modo de depuración", false)
  .option("-p, --port <port>", "Puerto de escucha", 5173)
  .requiredOption("-u, --user <user>", "User de la DB");

program.parse();

const options = program.opts();
const remain = program.args;
console.log(options);
console.log(remain);
