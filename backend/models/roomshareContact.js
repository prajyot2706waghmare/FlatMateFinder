import mongoose from "mongoose";

const roomShareContactSchema = new mongoose.Schema({
  // 🔗 Optional link to a specific room share post
  roomId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "RoomShare",
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
roomShareContactSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const RoomShareContact = mongoose.model("RoomShareContact", roomShareContactSchema);

export default RoomShareContact;
