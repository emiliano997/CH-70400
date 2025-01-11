import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
import { connect } from "mongoose";
import MongoStore from "connect-mongo";
import handlebars from "express-handlebars";
import { __dirname } from "./dirname.js";
import path from "path";
import { viewsRouter } from "./routes/views.routes.js";
import { sessionRouter } from "./routes/session.routes.js";

const app = express();
const SECRET = "clavesecreta";

// Mongo URL
const mongoUser = "emi";
const mongoPassword = "1234";

const mongoUrl = ``;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    secret: SECRET,
    store: MongoStore.create({
      mongoUrl,
      ttl: 15,
    }),
    resave: false,
    saveUninitialized: false,
  })
);

// Mongo Connection
connect(``)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.error(error));

// Handlebars config
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    defaultLayout: "main",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.use("/", viewsRouter);
app.use("/api/sessions", sessionRouter);

app.listen(5000, () => {
  console.log("Server running on port http://localhost:5000");
});
