import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    gender: { type: String, enum: ["Male", "Female", "Other"], required: true },

    // 🆕 Added fields for image
    profileImage: {
      type: String, // URL from Cloudinary
      required: true,
    },
    cloudinaryId: {
      type: String, // Optional: to track/delete the image later if needed
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
