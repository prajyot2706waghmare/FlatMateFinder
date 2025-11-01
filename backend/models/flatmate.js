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
