import morgan from "morgan";
import express from "express";
import mongoose from "mongoose";
import passport from "passport";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import { initializePassport } from "./config/passport.config.js";

const app = express();
const PORT = 5000;

// Express config
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// Passport
initializePassport();
app.use(passport.initialize());

// Mongoose
mongoose
  .connect("mongodb://localhost:27017/auth")
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error(error));

// Routes
app.use("/api/auth", authRoutes);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
