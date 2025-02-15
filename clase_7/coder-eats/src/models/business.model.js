import { Schema, model } from "mongoose";

const businessSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },

  products: {
    type: [
      {
        // product: { type: Schema.Types.ObjectId, ref: 'Product' },
        // quantity: { type: Number, required: true }
        name: { type: String, required: true },
        price: { type: Number, required: true },
      },
    ],
  },
});

export const Business = model("business", businessSchema);
