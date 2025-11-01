// models/flat.js
import mongoose from "mongoose";

const flatSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  duration: {
    type: String,
    default: "MONTHLY",
    required: true,
  },
  property: {
    type: String,
    required: true, // allow any property string like "1RK", "2RK"
  },
  furnishing: {
    type: String, // e.g., "Furnished", "Semi-Furnished"
  },
  genderPreference: {
    type: String,
    enum: ["Male", "Female", "Any"],
    default: "Any",
  },
  agePreference: {
    type: String, // optional, e.g., "23" or "22-30"
  },
  availableFrom: {
    type: Date,
    required: true,
  },
  facilities: {
    type: [String], // array of strings
    default: [],
  },
  image: {
    type: String, // optional URL
  },
}, { timestamps: true });

const Flat = mongoose.model("Flat", flatSchema, "flats"); // force collection name

export default Flat;

