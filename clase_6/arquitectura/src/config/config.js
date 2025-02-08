import { config } from "dotenv";

import { PERSISTENCE } from "../common/constants/persistence.js";

config();

export const CONFIG = {
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI || "mongodb://localhost/fullstack",
  PERSISTENCE: process.env.PERSISTENCE || PERSISTENCE.MEMORY,
};
