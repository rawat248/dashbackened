import mongoose from "mongoose";

const OverallSchema = new mongoose.Schema({
  intensity: Number,
  published: String,
  topic: String,
});

const Overall = mongoose.model("Overall", OverallSchema);
export default Overall;


