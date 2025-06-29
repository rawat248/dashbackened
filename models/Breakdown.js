import mongoose from "mongoose";

const BreakdownSchema = new mongoose.Schema({
  relevance: Number,
  published: String,
  topic: String,
});

const Break = mongoose.model("Breakdown", BreakdownSchema);
export default Break;


