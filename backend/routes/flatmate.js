
// export default router; // ✅ ES Module export
// routes/flatmate.js
import express from "express";
import Flatmate from "../models/flatmate.js"; // ensure file and export names match
// const router = express.Router();
import FlatmateContact from "../models/flatmateContact.js";
import { body, validationResult } from "express-validator";

const router = express.Router();

// Validation middleware
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ success: false, errors: errors.array() });
  next();
};

router.get("/", async (req, res) => {
  try {
    const docs = await Flatmate.find().sort({ createdAt: -1 });
    res.json(docs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const doc = await Flatmate.findById(req.params.id);
    if (!doc) return res.status(404).json({ error: "Not found" });
    res.json(doc);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

router.post("/", async (req, res) => {
  try {
    const doc = new Flatmate(req.body);
    await doc.save();
    res.status(201).json(doc);
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

      const contact = new FlatmateContact({
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
