import { Schema, model } from "mongoose";

const orderSchema = new Schema({
  number: { type: Number, required: true },
  business: {
    type: Schema.Types.ObjectId,
    ref: "business",
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  products: [],
  status: {
    type: String,
    required: true,
    enum: ["pending", "cancelled", "completed"],
    default: "pending",
  },
  totalPrice: { type: Number, required: true },
});

// Middleware de mongoose
orderSchema.pre("find", function () {
  this.populate("business");
  this.populate("user");
});

orderSchema.pre("findOne", function () {
  this.populate("business");
  this.populate("user");
});

export const Order = model("order", orderSchema);
