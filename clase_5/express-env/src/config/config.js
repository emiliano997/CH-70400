import { config } from "dotenv";
import { Command } from "commander";

const program = new Command();

program.requiredOption("-m, --mode <mode>", "Environment mode");

program.parse(process.argv);

const { mode } = program.opts();

let path = "";

switch (mode) {
  case "dev":
  case "development":
    path = ".env.development";
    break;

  case "prod":
  case "production":
    path = ".env.production";
    break;

  case "test":
    path = ".env.test";
    break;

  default:
    path = ".env";
    break;
}

config({
  path,
});

export const CONFIG = {
  PORT: process.env.PORT || 3000,
  FRONTEND_URL: process.env.FRONTEND_URL,
  CLOUDINARY: {
    USER_ID: process.env.USER_CLOUDINARY_ID,
    USER_PASSWORD: process.env.USER_CLOUDINARY_PASSWORD,
  },
  JWT: {
    SECRET: process.env.JWT_SECRET,
    EXPIRES: process.env.JWT_EXPIRATION,
  },
  DB: {
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    HOST: process.env.DB_HOST,
    PORT: process.env.DB_PORT,
    DATABASE: process.env.DB_NAME,
  },
};
