import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: {
    type: String,
    required: true,
    enum: ["user", "admin"],
    default: "user",
  },

  orders: {
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: "order",
      },
    ],
    default: [],
  },
});

export const User = model("user", userSchema);
