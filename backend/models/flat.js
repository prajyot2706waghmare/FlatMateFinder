// // models/flat.js
// import mongoose from "mongoose";

// const flatSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   property: {
//     type: String,
//     enum: ["Flat", "PG", "Flatmate"], // Only allow these values
//     required: true,
//   },
//   price: {
//     type: String,
//     required: true,
//   },
//   image: {
//     type: String,
//   },
//   location: {
//     type: String,
//     required: true,
//   },
//   availableFrom: {
//     type: Date,
//     required: true,
//   },
//   duration: {
//     type: String, // e.g., "6 months", "12 months"
//     required: true,
//   },
//   genderPreference: {
//     type: String,
//     enum: ["Male", "Female", "Any"],
//     default: "Any",
//   },
//   agePreference: {
//     type: String, // e.g., "22-30"
//   },
//   facilities: {
//     type: [String], // e.g., ["Wi-Fi", "Balcony"]
//   },
//   sharingType: {
//     type: String, // e.g., "2 BHK", "Single", "Studio"
//   },
//   furnishing: {
//     type: String, // e.g., "Fully Furnished", "Semi-Furnished"
//   },
// }, { timestamps: true });

// // const Flat = mongoose.model("Flat", FlatSchema);
// const Flat = mongoose.model("Flat", flatSchema, "flats"); // force collection name

// export default Flat;


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

