import { Schema, model } from "mongoose";

const categorySchema = new Schema(
  {
    type: { type: String, default: "Investment", required: true },
    color: { type: String, default: "FCBE44" },
  },
  { timestamps: true }
);

export default model("Categories", categorySchema);
