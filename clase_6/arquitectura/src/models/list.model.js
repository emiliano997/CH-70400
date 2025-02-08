import { Schema, model } from "mongoose";

const listSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  contacts: [{ type: Schema.Types.ObjectId, ref: "contact" }],
});

export const List = model("list", listSchema);
