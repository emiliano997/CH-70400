import cors from "cors";
import morgan from "morgan";
import express from "express";

import { CONFIG } from "./config/config.js";
import { listRouter } from "./routes/list.routes.js";
import { contactRouter } from "./routes/contact.routes.js";
import { mongodbProvider } from "./providers/mongodb.provider.js";
import { PERSISTENCE } from "./common/constants/persistence.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/contacts", cors({ methods: ["POST"] }), contactRouter);
app.use("/api/lists", listRouter);

if (CONFIG.PERSISTENCE === PERSISTENCE.MONGODB) {
  mongodbProvider
    .connect(CONFIG.MONGO_URI)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB", error);
    });
}

app.listen(CONFIG.PORT, async () => {
  console.log(`Server running on http://localhost:${CONFIG.PORT}`);
});
