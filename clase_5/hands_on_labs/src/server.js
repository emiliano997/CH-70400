import morgan from "morgan";
import express from "express";
import { connect } from "mongoose";

import { CONFIG } from "./config/config.js";
import { router } from "./routes/index.routes.js";
import { PERSISTANCE } from "./utils/persistance.js";

const app = express();

// Express config
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
if (CONFIG.PERSISTANCE === PERSISTANCE.MONGO_DB) {
  connect(CONFIG.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error(err));
}

// Routes
app.use("/api", router);

// Start server
app.listen(CONFIG.PORT, () => {
  console.log(`Server running on http://localhost:${CONFIG.PORT}`);
});
