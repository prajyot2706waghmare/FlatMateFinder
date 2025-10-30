// // // // routes/flatmate.js
// // // import express from "express";
// // // import Flatmate from "../models/flatmate.js";

// // // const router = express.Router();

// // // // GET /flatmates  -> get all
// // // router.get("/", async (req, res) => {
// // //   try {
// // //     const flatmates = await Flatmate.find().sort({ createdAt: -1 });
// // //     res.json(flatmates);
// // //   } catch (err) {
// // //     res.status(500).json({ error: err.message });
// // //   }
// // // });

// // // // GET /flatmates/:id -> single
// // // router.get("/:id", async (req, res) => {
// // //   try {
// // //     const flatmate = await Flatmate.findById(req.params.id);
// // //     if (!flatmate) return res.status(404).json({ error: "Flatmate not found" });
// // //     res.json(flatmate);
// // //   } catch (err) {
// // //     res.status(500).json({ error: err.message });
// // //   }
// // // });

// // // // POST /flatmates -> create
// // // router.post("/", async (req, res) => {
// // //   try {
// // //     const newFlatmate = new Flatmate(req.body);
// // //     const saved = await newFlatmate.save();
// // //     res.status(201).json(saved);
// // //   } catch (err) {
// // //     res.status(400).json({ error: err.message });
// // //   }
// // // });

// // // // PUT /flatmates/:id -> update
// // // router.put("/:id", async (req, res) => {
// // //   try {
// // //     const updated = await Flatmate.findByIdAndUpdate(req.params.id, req.body, {
// // //       new: true,
// // //       runValidators: true,
// // //     });
// // //     if (!updated) return res.status(404).json({ error: "Flatmate not found" });
// // //     res.json(updated);
// // //   } catch (err) {
// // //     res.status(400).json({ error: err.message });
// // //   }
// // // });

// // // // DELETE /flatmates/:id -> delete
// // // // router.delete("/:id", async (req, res) => {
// // // //   try {
// // // //     const deleted = await Flatmate.findByIdAndDelete(req.params.id);
// // // //     if (!deleted) return res.status(404).json({ error: "Flatmate not found" });
// // // //     res.json({ message: "Flatmate deleted successfully" });
// // // //   } catch (err) {
// // // //     res.status(500).json({ error: err.message });
// // // //   }
// // // // });

// // // export default router;
// // // import express from "express";
// // // const router = express.Router();

// // // // Example test route
// // // router.get("/", (req, res) => {
// // //   res.json({ message: "Flatmate API working ✅" });
// // // });

// // // export default router;
// // // routes/flatmate.js
// // import express from "express";
// // import Flatmate from "../models/flatmate.js";

// // const router = express.Router();

// // // GET all flatmates
// // router.get("/", async (req, res) => {
// //   try {
// //     const flatmates = await Flatmate.find();
// //     res.json(flatmates);
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // });

// // export default router;
// import express from "express";
// import Flatmate from "../models/flatmate.js"; // ✅ must exist

// const router = express.Router();

// // GET all flatmates
// router.get("/", async (req, res) => {
//   try {
//     const flatmates = await Flatmate.find();
//     res.json(flatmates);
//   } catch (err) {
//     console.error("Error fetching flatmates:", err);
//     res.status(500).json({ error: "Failed to fetch flatmates" });
//   }
// });

// export default router;
// import express from "express";
// import Flatmate from "../models/flatmate.js";

// const router = express.Router();

// // ✅ Get all flatmates
// router.get("/", async (req, res) => {
//   try {
//     const flatmates = await Flatmate.find();
//     res.json(flatmates);
//   } catch (err) {
//     console.error("Error fetching flatmates:", err);
//     res.status(500).json({ error: "Failed to fetch flatmates" });
//   }
// });

// // ✅ Add new flatmate
// router.post("/", async (req, res) => {
//   try {
//     const newFlatmate = new Flatmate(req.body);
//     await newFlatmate.save();
//     res.status(201).json(newFlatmate);
//   } catch (err) {
//     console.error("Error adding flatmate:", err);
//     res.status(500).json({ error: "Failed to add flatmate" });
//   }
// });

// export default router;
// const express = require("express");
// const router = express.Router();
// const Flatmate = require("../models/Flatmate");

// // Get all flats
// router.get("/", async (req, res) => {
//   try {
//     const flats = await Flatmate.find();
//     res.json(flats);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // Add a new flat
// router.post("/", async (req, res) => {
//   try {
//     const flat = new Flatmate(req.body);
//     await flat.save();
//     res.status(201).json(flat);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// module.exports = router;
// // routes/flatmate.js
// import express from "express";
// import Flatmate from "../models/Flatmate.js"; // make sure filename and extension match

// const router = express.Router();

// // Get all flatmates
// router.get("/", async (req, res) => {
//   try {
//     const flats = await Flatmate.find();
//     res.json(flats);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // Add a new flatmate
// router.post("/", async (req, res) => {
//   try {
//     const flat = new Flatmate(req.body);
//     await flat.save();
//     res.status(201).json(flat);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

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
