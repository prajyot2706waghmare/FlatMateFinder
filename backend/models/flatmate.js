// // // models/flatmate.js
// // import mongoose from "mongoose";

// // const flatmateSchema = new mongoose.Schema(
// //   {
// //     name: { type: String, required: true },
// //     age: { type: Number, required: true },
// //     gender: { type: String, enum: ["Male", "Female", "Any"], required: true },
// //     occupation: { type: String },
// //     locationPreference: { type: String },
// //     budget: { type: String },
// //     contact: { type: String, required: true }, // phone/email
// //     bio: { type: String },
// //   },
// //   { timestamps: true }
// // );

// // const Flatmate = mongoose.model("Flatmate", flatmateSchema, "flatmates"); // force collection name
// // export default Flatmate;
// // import mongoose from "mongoose";

// // const flatmateSchema = new mongoose.Schema({
// //   name: { type: String, required: true, trim: true },
// //   age: { type: Number, required: true },
// //   gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
// //   location: { type: String, required: true },
// //   budget: { type: Number },
// // }, { timestamps: true });

// // const Flatmate = mongoose.model("Flatmate", flatmateSchema);

// // export default Flatmate;
// // const mongoose = require("mongoose");

// // const flatmateSchema = new mongoose.Schema({
// //   title: { type: String, required: true },
// //   location: { type: String, required: true },
// //   price: { type: Number, required: true },
// //   duration: { type: String, default: "MONTHLY" },
// //   property: { type: String },
// //   furnishing: { type: String },
// //   genderPreference: { type: String },
// //   agePreference: { type: String },
// //   availableFrom: { type: Date },
// //   facilities: [String],
// //   image: { type: String },
// //   createdAt: { type: Date, default: Date.now }
// // });

// // module.exports = mongoose.model("Flatmate", flatmateSchema);
// // models/Flatmate.js
// import mongoose from "mongoose";

// const flatmateSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   location: { type: String, required: true },
//   price: { type: Number, required: true },
//   duration: { type: String, default: "MONTHLY" },
//   property: { type: String },
//   furnishing: { type: String },
//   genderPreference: { type: String },
//   agePreference: { type: String },
//   availableFrom: { type: Date },
//   facilities: [String],
//   image: { type: String }
// }, { timestamps: true });

// const Flatmate = mongoose.model("Flatmate", flatmateSchema);
// export default Flatmate;

import mongoose from "mongoose";

const flatmateSchema = new mongoose.Schema(
  {
    // Required fields for validation
    name: { type: String, required: true },
    location: { type: String, required: true },
    budget: { type: Number, required: true },

    // Optional fields
    age: { type: Number },
    gender: { type: String },
    occupation: { type: String },

    // Array of strings for lifestyle/preferences
    preferences: [String],

    // Contact info
    contact: {
      email: { type: String },
      phone: { type: String },
    },

    // Optional image
    image: { type: String },

    // Extra fields you had before (keep if you plan to extend later)
    duration: { type: String, default: "MONTHLY" },
    property: { type: String },
    furnishing: { type: String },
    genderPreference: { type: String },
    agePreference: { type: String },
    availableFrom: { type: Date },
    facilities: [String],
  },
  { timestamps: true }
);

const Flatmate = mongoose.model("Flatmate", flatmateSchema);
export default Flatmate;
