
// routes/flat.js
import express from "express";
import multer from "multer";
import Flat from "../models/flat.js";
import { storage } from "../config/cloudinary.js"; // Cloudinary storage config
import FlatContact from "../models/flatContact.js";
import { body, validationResult } from "express-validator";

const router = express.Router();

// Validation middleware
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ success: false, errors: errors.array() });
  next();
};

// const router = express.Router();
const upload = multer({ storage }); // multer using Cloudinary storage

// ================================
// Helper to build flat payload
// ================================
const buildFlatPayload = (body, file) => ({
  ...body,
  price: body.price ? Number(body.price) : undefined,
  availableFrom: body.availableFrom ? new Date(body.availableFrom) : undefined,
  facilities: body.facilities
    ? body.facilities.split(",").map((f) => f.trim())
    : [],
  image: file ? file.path : undefined, // Cloudinary URL (multer-storage-cloudinary provides .path)
});

// ================================
// POST a new flat with image upload
// ================================
router.post("/", upload.single("image"), async (req, res) => {
  console.log("=== POST /flats request received ===");

  try {
    // Log all incoming fields
    console.log("Incoming form fields:", JSON.stringify(req.body, null, 2));

    // Log file info
    if (req.file) {
      console.log("Incoming file info:", {
        originalname: req.file.originalname,
        mimetype: req.file.mimetype,
        size: req.file.size,
        path: req.file.path, // Cloudinary URL
      });
    } else {
      console.log("No file uploaded");
    }

    // Build payload
    const payload = buildFlatPayload(req.body, req.file);

    // Create new Flat
    const newFlat = new Flat(payload);
    console.log("Creating new flat:", JSON.stringify(payload, null, 2));

    const savedFlat = await newFlat.save();

    res.status(201).json({
      message: "Flat created successfully",
      flat: savedFlat,
    });
  } catch (err) {
    console.error("Error creating flat:", err);
    res.status(500).json({ error: err.message });
  }
});

// ================================
// GET all flats
// ================================
router.get("/", async (req, res) => {
  try {
    const flats = await Flat.find();
    res.json(flats);
  } catch (err) {
    console.error("Error fetching flats:", err);
    res.status(500).json({ error: err.message });
  }
});

// ================================
// GET single flat by ID
// ================================
router.get("/:id", async (req, res) => {
  try {
    const flat = await Flat.findById(req.params.id);
    if (!flat) return res.status(404).json({ error: "Flat not found" });

    res.json(flat);
  } catch (err) {
    console.error("Error fetching flat by ID:", err);
    res.status(500).json({ error: err.message });
  }
});

// ================================
// UPDATE flat
// ================================
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const payload = buildFlatPayload(req.body, req.file);

    const updatedFlat = await Flat.findByIdAndUpdate(req.params.id, payload, {
      new: true,
      runValidators: true,
    });

    if (!updatedFlat) return res.status(404).json({ error: "Flat not found" });

    res.json({ message: "Flat updated successfully", flat: updatedFlat });
  } catch (err) {
    console.error("Error updating flat:", err);
    res.status(400).json({ error: err.message });
  }
});

// ================================
// DELETE flat
// ================================
router.delete("/:id", async (req, res) => {
  try {
    const deletedFlat = await Flat.findByIdAndDelete(req.params.id);
    if (!deletedFlat) return res.status(404).json({ error: "Flat not found" });
    res.json({ message: "Flat deleted successfully" });
  } catch (err) {
    console.error("Error deleting flat:", err);
    res.status(500).json({ error: err.message });
  }
});

// -------------------- CONTACT ROUTE --------------------
router.post(
  "/contact",
  [
    body("name").trim().notEmpty().withMessage("Name is required"),
    body("phone").trim().notEmpty().withMessage("Phone is required"),
    body("email").optional({ checkFalsy: true }).isEmail().withMessage("Email must be valid"),
  ],
  validate,
  async (req, res) => {
    try {
      const { roomId, name, phone, email, consent, interestedInLoan } = req.body;

      const contact = new FlatContact({
        roomId,
        name,
        phone,
        email,
        consent: !!consent,
        interestedInLoan: !!interestedInLoan,
      });

      const saved = await contact.save();
      res.status(201).json({ success: true, data: saved });
    } catch (err) {
      console.error("createContact error:", err);
      res.status(500).json({ success: false, message: "Server error" });
    }
  }
);

export default router;
