import { Router } from "express";

export const wordRouter = Router();

// DB
const words = ["hello", "world", "node", "express"];

wordRouter.param("word", (req, res, next, word) => {
  if (!/[a-zA-Z]+/.test(word)) {
    return res.status(400).json({ error: "Invalid word" });
  }

  const searchWord = words.find((w) => w === word);

  if (!searchWord) {
    return res.status(404).json({ error: "Word not found" });
  }

  next();
});

wordRouter.get("/:word", (req, res) => {
  res.json({ word: req.params.word });
});
