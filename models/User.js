import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  end_year: {
    type: Number,
  },
  intensity: {
    type: Number,
  },
  sector: {
    type: String,
  },
  topic: {
    type: String,
  },
  insight: {
    type: String,
  },
  region: {
    type: String,
  },
  start_year: {
    type: Number,
  },
  country: {
    type: String,
  },
  relevance: {
    type: Number,
  },
  likelihood: {
    type: Number,
  },
});

const User = mongoose.model("User", UserSchema);
export default User;
