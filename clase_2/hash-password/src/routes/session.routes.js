import { Router } from "express";
import { userModel } from "../models/user.model.js";
import { hashPassword, verifyPassword } from "../utils/password.utils.js";

export const sessionRouter = Router();

sessionRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ message: "Email and password are required" });

  try {
    const user = await userModel.findOne({ email }).lean();

    if (!user) return res.status(404).json({ message: "User not found" });

    const isPasswordCorrect = await verifyPassword(password, user.password);

    if (!isPasswordCorrect)
      return res.status(401).json({ message: "Invalid password" });

    req.session.user = {
      id: user._id,
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
      age: user.age,
    };

    res.redirect("/profile");
  } catch (error) {
    res.status(500).json({ message: "Internal server error", details: error });
  }
});

sessionRouter.post("/register", async (req, res) => {
  const { first_name, last_name, age, email, password } = req.body;

  if (!first_name || !last_name || !age || !email || !password)
    return res.status(400).json({ message: "All fields are required" });

  try {
    const hashedPassword = await hashPassword(password);

    const user = await userModel.create({
      first_name,
      last_name,
      age,
      email,
      password: hashedPassword,
    });

    res.redirect("/login");
  } catch (error) {
    res.status(500).json({ message: "Internal server error", details: error });
  }
});

sessionRouter.post("/restore-password", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email }).lean();

    if (!user) return res.status(404).json({ message: "User not found" });

    const hashedPassword = await hashPassword(password);

    await userModel.updateOne({ _id: user._id }, { password: hashedPassword });

    res.redirect("/login");
  } catch (error) {
    res.status(500).json({ message: "Internal server error", details: error });
  }
});

sessionRouter.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});
