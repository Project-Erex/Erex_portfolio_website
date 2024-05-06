import mongoose from "mongoose";

const ReviewsSchema = new mongoose.Schema({
  client: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: false,
  },
  rating: {
    type: String,
    required: true,
  },
  project: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Reviews || mongoose.model("Reviews", ReviewsSchema);
