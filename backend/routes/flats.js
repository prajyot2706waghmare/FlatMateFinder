// // // // routes/flat.js
// // // import express from "express";
// // // import Flat from "../models/flat.js"; // Make sure path is correct

// // // const router = express.Router();

// // // // router.get("/", async (req, res) => {
// // // //      console.log("you are at get /flats");
// // // //   try {
// // // //     const flats = await Flat.find();
// // // //     res.json(flats);
// // // //   } catch (err) { 
// // // //     console.log("you are at get /flats");
// // // //     res.status(500).json({ error: err.message });
// // // //   }
// // // // });

// // // router.get("/", async (req, res) => {
// // //   // console.log("you are at get /flats");
// // //   try {
// // //     const flats = await Flat.find();
// // //     res.json(flats);
// // //   } catch (err) { 
// // //     res.status(500).json({ error: err.message });
// // //   }
// // // });



// // // router.get("/:id", async (req, res) => {
// // //   try {
// // //     const flat = await Flat.findById(req.params.id);
// // //     if (!flat) return res.status(404).json({ error: "Flat not found" });
// // //     res.json(flat);
// // //   } catch (err) {
// // //     res.status(500).json({ error: err.message });
// // //   }
// // // });

// // // // /**
// // // //  * @route   POST /flats
// // // //  * @desc    Create a new flat/listing
// // // //  */
// // // // router.post("/", async (req, res) => {
// // // //   try {
// // // //     const newFlat = new Flat(req.body);
// // // //     console.log("Creating new flat:", newFlat);
// // // //     const savedFlat = await newFlat.save();
// // // //     res.status(201).json(savedFlat);
// // // //   } catch (err) {
// // // //     res.status(400).json({ error: err.message });
// // // //   }
// // // // });

// // // router.post("/", async (req, res) => {
// // //   try {
// // //     const payload = {
// // //       ...req.body,
// // //       price: Number(req.body.price),
// // //       availableFrom: req.body.availableFrom
// // //         ? new Date(req.body.availableFrom)
// // //         : undefined,
// // //       facilities: req.body.facilities
// // //         ? req.body.facilities.map(f => f.trim())
// // //         : [],
// // //     };

// // //     const newFlat = new Flat(payload);
// // //     console.log("Creating new flat:", newFlat);
// // //     const savedFlat = await newFlat.save();

// // //     res.status(201).json(savedFlat);
// // //   } catch (err) {
// // //     console.error("Error creating flat:", err);
// // //     res.status(400).json({ error: err.message });
// // //   }
// // // });


// // // // /**
// // // //  * @route   PUT /flats/:id
// // // //  * @desc    Update an existing flat/listing
// // // //  */
// // // // router.put("/:id", async (req, res) => {
// // // //   try {
// // // //     const updatedFlat = await Flat.findByIdAndUpdate(
// // // //       req.params.id,
// // // //       req.body,
// // // //       { new: true, runValidators: true }
// // // //     );
// // // //     if (!updatedFlat) return res.status(404).json({ error: "Flat not found" });
// // // //     res.json(updatedFlat);
// // // //   } catch (err) {
// // // //     res.status(400).json({ error: err.message });
// // // //   }
// // // // });

// // // // /**
// // // //  * @route   DELETE /flats/:id
// // // //  * @desc    Delete a flat/listing
// // // //  */
// // // // router.delete("/:id", async (req, res) => {
// // // //   try {
// // // //     const deletedFlat = await Flat.findByIdAndDelete(req.params.id);
// // // //     if (!deletedFlat) return res.status(404).json({ error: "Flat not found" });
// // // //     res.json({ message: "Flat deleted successfully" });
// // // //   } catch (err) {
// // // //     res.status(500).json({ error: err.message });
// // // //   }
// // // // });

// // // export default router;
// // import multer from "multer";
// // import { storage } from "../config/cloudinary.js";
// // const upload = multer({ storage });


// // // routes/flat.js
// // import express from "express";
// // import Flat from "../models/flat.js";
// // import multer from "multer";
// // import { storage } from "../config/cloudinary.js"; // Cloudinary storage config

// // const router = express.Router();
// // const upload = multer({ storage }); // multer using Cloudinary storage

// // // GET all flats
// // router.get("/", async (req, res) => {
// //   try {
// //     const flats = await Flat.find();
// //     res.json(flats);
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // });

// // // GET flat by ID
// // router.get("/:id", async (req, res) => {
// //   try {
// //     const flat = await Flat.findById(req.params.id);
// //     if (!flat) return res.status(404).json({ error: "Flat not found" });
// //     res.json(flat);
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // });

// // // POST a new flat with image upload
// // router.post("/", upload.single("image"), async (req, res) => {
// //   try {
// //     const payload = {
// //       ...req.body,
// //       price: Number(req.body.price),
// //       availableFrom: req.body.availableFrom
// //         ? new Date(req.body.availableFrom)
// //         : undefined,
// //       facilities: req.body.facilities
// //         ? req.body.facilities.split(",").map(f => f.trim())
// //         : [],
// //       image: req.file ? req.file.path : undefined, // Cloudinary URL
// //     };

// //     const newFlat = new Flat(payload);
// //     console.log("Creating new flat:", newFlat);
// //     const savedFlat = await newFlat.save();

// //     res.status(201).json({ message: "Flat created successfully", flat: savedFlat });
// //   } catch (err) {
// //     console.error("Error creating flat:", err);
// //     res.status(400).json({ error: err.message });
// //   }
// // });

// // // PUT update flat by ID
// // router.put("/:id", upload.single("image"), async (req, res) => {
// //   try {
// //     const payload = {
// //       ...req.body,
// //       price: req.body.price ? Number(req.body.price) : undefined,
// //       availableFrom: req.body.availableFrom
// //         ? new Date(req.body.availableFrom)
// //         : undefined,
// //       facilities: req.body.facilities
// //         ? req.body.facilities.split(",").map(f => f.trim())
// //         : undefined,
// //       image: req.file ? req.file.path : undefined, // update image if uploaded
// //     };

// //     const updatedFlat = await Flat.findByIdAndUpdate(
// //       req.params.id,
// //       payload,
// //       { new: true, runValidators: true }
// //     );

// //     if (!updatedFlat) return res.status(404).json({ error: "Flat not found" });
// //     res.json({ message: "Flat updated successfully", flat: updatedFlat });
// //   } catch (err) {
// //     console.error("Error updating flat:", err);
// //     res.status(400).json({ error: err.message });
// //   }
// // });

// // // DELETE flat by ID
// // router.delete("/:id", async (req, res) => {
// //   try {
// //     const deletedFlat = await Flat.findByIdAndDelete(req.params.id);
// //     if (!deletedFlat) return res.status(404).json({ error: "Flat not found" });
// //     res.json({ message: "Flat deleted successfully" });
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // });

// // export default router;


// // // routes/flat.js
// // import express from "express";
// // import multer from "multer";
// // import Flat from "../models/flat.js";
// // import { storage } from "../config/cloudinary.js"; // Cloudinary storage config

// // const router = express.Router();
// // const upload = multer({ storage }); // multer using Cloudinary storage

// // // ================================
// // // Helper to build flat payload
// // // ================================
// // const buildFlatPayload = (body, file) => ({
// //   ...body,
// //   price: body.price ? Number(body.price) : undefined,
// //   availableFrom: body.availableFrom ? new Date(body.availableFrom) : undefined,
// //   facilities: body.facilities
// //     ? body.facilities.split(",").map(f => f.trim())
// //     : [],
// //   image: file ? file.path : undefined, // Cloudinary URL
// // });

// // // ================================
// // // GET all flats
// // // ================================
// // router.get("/", async (req, res) => {
// //   try {
// //     const flats = await Flat.find();
// //     res.json(flats);
// //   } catch (err) {
// //     console.error("Error fetching flats:", err);
// //     res.status(500).json({ error: err.message });
// //   }
// // });

// // // ================================
// // // GET flat by ID
// // // ================================
// // router.get("/:id", async (req, res) => {
// //   try {
// //     const flat = await Flat.findById(req.params.id);
// //     if (!flat) return res.status(404).json({ error: "Flat not found" });
// //     res.json(flat);
// //   } catch (err) {
// //     console.error("Error fetching flat by ID:", err);
// //     res.status(500).json({ error: err.message });
// //   }
// // });

// // // ================================
// // // POST a new flat with image upload
// // // ================================
// // router.post("/", upload.single("image"), async (req, res) => {
// //   console.log("hello")
// //   try {
// //     console.log("Incoming fields:", req.body);
// //     console.log("Incoming file:", req.file);

// //     const payload = buildFlatPayload(req.body, req.file);

// //     const newFlat = new Flat(payload);
// //     console.log("Creating new flat:", newFlat);

// //     const savedFlat = await newFlat.save();
// //     res.status(201).json({ message: "Flat created successfully", flat: savedFlat });
// //   } catch (err) {
// //     console.error("Error creating flat:", err);
// //     res.status(400).json({ error: err.message });
// //   }
// // });

// // // ================================
// // // PUT update flat by ID
// // // ================================
// // router.put("/:id", upload.single("image"), async (req, res) => {
// //   try {
// //     const payload = buildFlatPayload(req.body, req.file);

// //     const updatedFlat = await Flat.findByIdAndUpdate(req.params.id, payload, {
// //       new: true,
// //       runValidators: true,
// //     });

// //     if (!updatedFlat) return res.status(404).json({ error: "Flat not found" });
// //     res.json({ message: "Flat updated successfully", flat: updatedFlat });
// //   } catch (err) {
// //     console.error("Error updating flat:", err);
// //     res.status(400).json({ error: err.message });
// //   }
// // });

// // // ================================
// // // DELETE flat by ID
// // // ================================
// // router.delete("/:id", async (req, res) => {
// //   try {
// //     const deletedFlat = await Flat.findByIdAndDelete(req.params.id);
// //     if (!deletedFlat) return res.status(404).json({ error: "Flat not found" });
// //     res.json({ message: "Flat deleted successfully" });
// //   } catch (err) {
// //     console.error("Error deleting flat:", err);
// //     res.status(500).json({ error: err.message });
// //   }
// // });

// // export default router;


// // routes/flat.js
// import express from "express";
// import multer from "multer";
// import Flat from "../models/flat.js";
// import { storage } from "../config/cloudinary.js"; // Cloudinary storage config

// const router = express.Router();
// const upload = multer({ storage }); // multer using Cloudinary storage

// // ================================
// // Helper to build flat payload
// // ================================
// const buildFlatPayload = (body, file) => ({
//   ...body,
//   price: body.price ? Number(body.price) : undefined,
//   availableFrom: body.availableFrom ? new Date(body.availableFrom) : undefined,
//   facilities: body.facilities
//     ? body.facilities.split(",").map(f => f.trim())
//     : [],
//   image: file ? file.path : undefined, // Cloudinary URL
// });

// // ================================
// // POST a new flat with image upload
// // ================================
// router.post("/", upload.single("image"), async (req, res) => {
//   console.log("=== POST /flat request received ===");

//   try {
//     // Log all incoming fields
//     console.log("Incoming form fields:", JSON.stringify(req.body, null, 2));

//     // Log file info
//     // if (req.file) {
//     //   console.log("Incoming file info:", {
//     //     originalname: req.file.originalname,
//     //     mimetype: req.file.mimetype,
//     //     size: req.file.size,
//     //     path: req.file.path,
//     //   });
//     // } else {
//     //   console.log("No file uploaded");
//     // }

//     // Basic validation (optional)
//     // const requiredFields = ["title", "location", "price", "availableFrom"];
//     // for (const field of requiredFields) {
//     //   if (!req.body[field]) {
//     //     return res.status(400).json({ error: `${field} is required` });
//     //   }
//     // }

//     // const payload = buildFlatPayload(req.body, req.file);

//     // const newFlat = new Flat(payload);
//     // console.log("Creating new flat:", JSON.stringify(newFlat, null, 2));

//     // const savedFlat = await newFlat.save();

//     // res.status(201).json({
//     //   message: "Flat created successfully",
//     //   flat: savedFlat,
//     //   debug: {
//     //     payload,
//     //     file: req.file ? req.file.path : null,
//     //   },
//     // });
//   } catch (err) {
//     console.error("Error creating flat:", err);
//     res.status(400).json({ error: err.message });
//   }
// });

// // ================================
// // Other routes (GET, PUT, DELETE) remain unchanged
// // ================================
// router.get("/", async (req, res) => {
//   // console.log("=== GET /flats request received ===");
//   try {
//     const flats = await Flat.find();
//     res.json(flats);
//   } catch (err) {
//     console.error("Error fetching flats:", err);
//     res.status(500).json({ error: err.message });
//   }
// });

// router.get("/:id", async (req, res) => {

//   try {
//     const flat = await Flat.findById(req.params.id);
//     if (!flat) return res.status(404).json({ error: "Flat not found" });

//     res.json(flat);
//   } catch (err) {
//     console.error("Error fetching flat by ID:", err);
//     res.status(500).json({ error: err.message });
//   }
// });

// router.put("/:id", upload.single("image"), async (req, res) => {
//   try {
//     const payload = buildFlatPayload(req.body, req.file);

//     const updatedFlat = await Flat.findByIdAndUpdate(req.params.id, payload, {
//       new: true,
//       runValidators: true,
//     });

//     if (!updatedFlat) return res.status(404).json({ error: "Flat not found" });
//     res.json({ message: "Flat updated successfully", flat: updatedFlat });
//   } catch (err) {
//     console.error("Error updating flat:", err);
//     res.status(400).json({ error: err.message });
//   }
// });

// router.delete("/:id", async (req, res) => {
//   try {
//     const deletedFlat = await Flat.findByIdAndDelete(req.params.id);
//     if (!deletedFlat) return res.status(404).json({ error: "Flat not found" });
//     res.json({ message: "Flat deleted successfully" });
//   } catch (err) {
//     console.error("Error deleting flat:", err);
//     res.status(500).json({ error: err.message });
//   }
// });

// export default router;
// routes/flat.js
import express from "express";
import multer from "multer";
import Flat from "../models/flat.js";
import { storage } from "../config/cloudinary.js"; // Cloudinary storage config

const router = express.Router();
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

export default router;
