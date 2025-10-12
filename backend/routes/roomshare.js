import express from "express";
import RoomShare from "../models/RoomShare.js"; // adjust path if needed

const router = express.Router();

// 📌 GET all room shares
router.get("/", async (req, res) => {
  try {
    const shares = await RoomShare.find().sort({ createdAt: -1 });
    res.json(shares);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 📌 GET one room share by ID
router.get("/:id", async (req, res) => {
  try {
    const share = await RoomShare.findById(req.params.id);
    console.log("this is data :" ,share)
    if (!share) return res.status(404).json({ error: "Room share not found" });
    res.json(share);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 📌 POST create new room share
router.post("/", async (req, res) => {
  try {
    const newShare = new RoomShare(req.body);
    await newShare.save();
    res.status(201).json(newShare);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
