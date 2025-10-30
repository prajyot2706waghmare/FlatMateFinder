import mongoose from "mongoose";

const flatmateContactSchema = new mongoose.Schema({
  // 🔗 Optional link to a specific flatmate post
  flatmateId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Flatmate",
    required: false,
  },

  // 👤 Contact details from the user
  name: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },

  // ✅ Additional information
  consent: {
    type: Boolean,
    default: true, // whether user agrees to be contacted
  },
  interestedInLoan: {
    type: Boolean,
    default: false,
  },

  // 🕒 Meta fields
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
});

// Auto-update `updatedAt` before saving
flatmateContactSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const FlatmateContact = mongoose.model("FlatmateContact", flatmateContactSchema);

export default FlatmateContact;
