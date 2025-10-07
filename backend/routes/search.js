import express from "express";
import multer from "multer";
const router = express.Router();

// Storage config for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // folder to save uploaded images
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// Dummy rooms array
let rooms = [];

// GET all rooms
router.get("/", (req, res) => {
  res.json(rooms);
});

// POST new room with photo upload
router.post("/", upload.single("photo"), (req, res) => {
  const { title, description, property, price } = req.body;

  if (!title || !description || !property || !price || !req.file) {
    return res.status(400).json({ error: "All fields including photo are required" });
  }

  const newRoom = {
    id: rooms.length + 1,
    title,
    description,
    property,
    price,
    image: `http://localhost:5000/uploads/${req.file.filename}`, // URL to access image
  };

  rooms.push(newRoom);
  res.status(201).json(newRoom);
});

export default router;
