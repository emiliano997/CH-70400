import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
import FileStore from "session-file-store";
import MongoStore from "connect-mongo";

const app = express();
const fileStorage = FileStore(session);
const SECRET = "clavesecreta";

// Mongo URL
const mongoUser = "emi";
const mongoPassword = "1234";
const mongoUrl = `mongodb+srv://${mongoUser}:${mongoPassword}@curso-nodejs.de1bv.gcp.mongodb.net/ch-70400?retryWrites=true&w=majority&appName=curso-nodejs`;

app.use(cookieParser());

// File Storage Sessions
// app.use(
//   session({
//     secret: SECRET,
//     store: new fileStorage({
//       path: "./sessions",
//       ttl: 10, // 2 minutos
//       retries: 0,
//     }),
//     resave: false,
//     saveUninitialized: false,
//   })
// );

// MongoDB Store Sessions
app.use(
  session({
    secret: SECRET, // Clave secreta de la sesión
    store: MongoStore.create({
      // Configuración del almacenamiento de las sesiones
      mongoUrl, // URL de MongoDB
      ttl: 15, // Time To Live (Duración de la sesión en segundos)
    }),
    resave: false, // No guardar la sesión si no se ha modificado
    saveUninitialized: false, // No guardar sesiones no inicializadas
  })
);

app.get("/", (req, res) => {
  console.log(req.session);

  if (req.session.counter) {
    req.session.counter++;
    res.send(`Counter: ${req.session.counter}`);
  } else {
    req.session.counter = 1;
    res.send("Welcome!");
  }
});

app.listen(5000, () => {
  console.log("Server running on port http://localhost:5000");
});
