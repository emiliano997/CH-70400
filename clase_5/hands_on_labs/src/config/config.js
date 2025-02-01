import { config } from "dotenv";

config();

export const CONFIG = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  PERSISTANCE: process.env.PERSISTANCE,
};
