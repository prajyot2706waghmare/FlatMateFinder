// backend/src/models/RoomShare.js
import mongoose from "mongoose";

const roomShareSchema = new mongoose.Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  rent: { type: Number, required: true },
  vacancy: { type: Number, default: 1 },
  description: { type: String },
});

const RoomShare = mongoose.model("RoomShare", roomShareSchema);

export default RoomShare;
