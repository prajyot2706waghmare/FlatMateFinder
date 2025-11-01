import express from "express";
import RoomShare from "../models/RoomShare.js";
import RoomShareContact from "../models/roomshareContact.js";
import { body, validationResult } from "express-validator";

const router = express.Router();

// Validation middleware
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ success: false, errors: errors.array() });
  next();
};

// -------------------- ROOM SHARE ROUTES --------------------

// GET all room shares
router.get("/", async (req, res) => {
  try {
    const shares = await RoomShare.find().sort({ createdAt: -1 });
    res.json(shares);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET one room share
router.get("/:id", async (req, res) => {
  try {
    const share = await RoomShare.findById(req.params.id);
    if (!share) return res.status(404).json({ error: "Room share not found" });
    res.json(share);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST new room share
router.post("/", async (req, res) => {
  try {
    const newShare = new RoomShare(req.body);
    await newShare.save();
    res.status(201).json(newShare);
  } catch (err) {
    res.status(400).json({ error: err.message });
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

      const contact = new RoomShareContact({
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
