import express from "express";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";

const app = express();

// Express config
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

// Routes
app.get("/cookies", (req, res) => {
  const token = jwt.sign(
    {
      id: "abcd",
      username: "test",
      role: "admin",
    },
    "s3cr3t",
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
    "s3cr3t",
    { expiresIn: "5m" }
  );

  res.cookie("token", token, {
    maxAge: 60 * 60 * 60,
    httpOnly: true,
  });

  res.json({ message: "Login successful", token });
});

app.get("/current", (req, res) => {
  if (req.cookies.token) {
    res.json({ message: "You are authorized" });
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
});

app.listen(5000, () => {
  console.log("Server is running on port http://localhost:5000");
});
