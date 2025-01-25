import express from "express";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import passport from "passport";
import { initializePassport } from "./config/passport.config.js";

const app = express();

export const SECRET = "s3cr3t";

// Express config
app.use(cookieParser());
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

initializePassport();
app.use(passport.initialize());

// Routes
app.get("/cookies", (req, res) => {
  const token = jwt.sign(
    {
      id: "abcd",
      username: "test",
      role: "admin",
    },
    SECRET,
    { expiresIn: "5m" }
  );

  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 60 * 60 * 60, // 1 hour
  });

  res.json({ message: "Cookie set", token });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  if (email !== "admin@gmail.com" || password !== "1234") {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    {
      id: "abcd",
      email,
      role: "admin",
    },
    SECRET,
    { expiresIn: "5m" }
  );

  res.cookie("token", token, {
    maxAge: 60 * 60 * 60,
    httpOnly: true,
  });

  res.json({ message: "Login successful", token });
});

app.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    return res.json(req.user);
  }
);

app.get(
  "/admin",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({ message: "Admin route" });
  }
);

app.listen(5000, () => {
  console.log("Server is running on port http://localhost:5000");
});
