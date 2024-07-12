import { Schema, model } from "mongoose";

const transactionSchema = new Schema(
  {
    name: { type: String, default: "Anonymous", required: true },
    type: { type: String, default: "Investment", required: true },
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now, required: true },
  },
  { timestamps: true }
);

export default model("Transaction", transactionSchema);
