// // // // import dotenv from "dotenv";
// // // // import express from "express";
// // // // import cors from "cors";
// // // // import connectDB from "./src/config/database.js";
// // // // import userAuthRoutes from "./routes/userAuth.js";
// // // // // import searchRoutes from "./routes/search.js";
// // // // import flatRoutes from "./routes/flats.js";
// // // // // server.js (near other imports)
// // // // import flatmateRoutes from "./routes/flatmate.js";

// // // // // ... after middleware and before test route
// // // // app.use("/flatmates", flatmateRoutes);

// // // // dotenv.config();

// // // // const app = express();
// // // // const PORT = process.env.PORT || 5000;

// // // // // Middleware
// // // // app.use(cors({ origin: "http://localhost:5173" })); // frontend URL
// // // // app.use(express.json());
// // // // app.use("/uploads", express.static("uploads"));

// // // // // Routes
// // // // app.use("/flats", flatRoutes);
// // // // app.use("/userauth", userAuthRoutes);

// // // // // Test route
// // // // app.get("/", (req, res) => {
// // // //   res.send("✅ Backend running successfully!");
// // // // });

// // // // // Connect DB and start server
// // // // connectDB()
// // // //   .then(() => {
// // // //     app.listen(PORT, () =>
// // // //       console.log(`🚀 Server running at http://localhost:${PORT}`)
// // // //     );
// // // //   })
// // // //   .catch((err) => {
// // // //     console.error("❌ Failed to connect to MongoDB:", err.message);
// // // //     process.exit(1);
// // // //   });
// // // import dotenv from "dotenv";
// // // import express from "express";
// // // import cors from "cors";

// // // import connectDB from "./src/config/database.js";
// // // import userAuthRoutes from "./routes/userAuth.js";
// // // // import searchRoutes from "./routes/search.js";
// // // import flatRoutes from "./routes/flats.js";
// // // //import flatmateRoutes from "./routes/flatmate.js";
// // // //import flatmateRoutes from "./routes/flatmate.js";
// // // // ...
// // // //app.use("/flatmates", flatmateRoutes);

// // // dotenv.config(); // ✅ load env first

// // // const app = express(); // ✅ app initialized before app.use
// // // const PORT = process.env.PORT || 5000;

// // // // Middleware
// // // app.use(cors({ origin: "http://localhost:5173" })); // frontend URL
// // // app.use(express.json());
// // // app.use("/uploads", express.static("uploads"));

// // // // Routes
// // // app.use("/flats", flatRoutes);
// // // app.use("/flatmates", flatmateRoutes);  // ✅ now works
// // // app.use("/userauth", userAuthRoutes);

// // // // Test route
// // // app.get("/", (req, res) => {
// // //   res.send("✅ Backend running successfully!");
// // // });

// // // // Connect DB and start server
// // // connectDB()
// // //   .then(() => {
// // //     app.listen(PORT, () =>
// // //       console.log(`🚀 Server running at http://localhost:${PORT}`)
// // //     );
// // //   })
// // //   .catch((err) => {
// // //     console.error("❌ Failed to connect to MongoDB:", err.message);
// // //     process.exit(1);
// // //   });
// // import dotenv from "dotenv";
// // import express from "express";
// // import cors from "cors";

// // import connectDB from "./src/config/database.js";
// // import userAuthRoutes from "./routes/userAuth.js";
// // // import searchRoutes from "./routes/search.js";
// // import flatRoutes from "./routes/flats.js";
// // //import flatmateRoutes from "./routes/flatmate.js"; // ✅ make sure this file exists in routes/
// // import flatmateRoutes from "./routes/flatmate.js";

// // app.use("/flatmates", flatmateRoutes);

// // dotenv.config(); // ✅ load env first

// // const app = express();
// // const PORT = process.env.PORT || 5000;

// // // Middleware
// // app.use(cors({ origin: "http://localhost:5173" })); // frontend URL
// // app.use(express.json());
// // app.use("/uploads", express.static("uploads"));

// // // Routes
// // app.use("/flats", flatRoutes);
// // app.use("/flatmate", flatmateRoutes); // ✅ now properly imported
// // app.use("/userauth", userAuthRoutes);

// // // Test route
// // app.get("/", (req, res) => {
// //   res.send("✅ Backend running successfully!");
// // });

// // // Connect DB and start server
// // connectDB()
// //   .then(() => {
// //     app.listen(PORT, () =>
// //       console.log(`🚀 Server running at http://localhost:${PORT}`)
// //     );
// //   })
// //   .catch((err) => {
// //     console.error("❌ Failed to connect to MongoDB:", err.message);
// //     process.exit(1);
// //   });
// // import dotenv from "dotenv";
// // import express from "express";
// // import cors from "cors";

// // import connectDB from "./src/config/database.js";
// // import userAuthRoutes from "./routes/userAuth.js";
// // import flatRoutes from "./routes/flats.js";
// // import flatmateRoutes from "./routes/flatmate.js"; // ✅ make sure this file exists
// // const flatmateRoutes = require("./routes/flatmate.js");
// // // Path to your route file

// // dotenv.config(); // ✅ load env first

// // const app = express(); // ✅ initialize app first
// // const PORT = process.env.PORT || 5000;

// // // ✅ Middleware
// // app.use(cors({ origin: "http://localhost:5173" })); // frontend URL
// // app.use(express.json());
// // app.use("/uploads", express.static("uploads"));
// // app.use("/api/flatmates", flatmatesRoute);

// // // ✅ Routes
// // app.use("/userauth", userAuthRoutes);
// // app.use("/flats", flatRoutes);
// // app.use("/flatmates", flatmateRoutes); // keep consistent (plural is better)

// // // ✅ Test route
// // app.get("/", (req, res) => {
// //   res.send("✅ Backend running successfully!");
// // });

// // // ✅ Connect DB and start server
// // connectDB()
// //   .then(() => {
// //     app.listen(PORT, () => {
// //       console.log(`🚀 Server running at http://localhost:${PORT}`);
// //     });
// //   })
// //   .catch((err) => {
// //     console.error("❌ Failed to connect to MongoDB:", err.message);
// //     process.exit(1);
// //   });
// //   export default router;
// // import dotenv from "dotenv";
// // import express from "express";
// // import cors from "cors";

// // import connectDB from "./src/config/database.js";
// // import userAuthRoutes from "./routes/userAuth.js";
// // import flatRoutes from "./routes/flats.js";
// // import flatmateRoutes from "./routes/flatmate.js"; // ✅ import once
// // app.use("/flatmates", flatmateRoutes);
// // dotenv.config(); // Load env variables

// // const app = express(); // Initialize app
// // const PORT = process.env.PORT || 5000;

// // // Middleware
// // app.use(cors({ origin: "http://localhost:5173" }));
// // app.use(express.json());
// // app.use("/uploads", express.static("uploads"));

// // // Routes
// // app.use("/userauth", userAuthRoutes);
// // app.use("/flats", flatRoutes);
// // app.use("/flatmates", flatmateRoutes); // ✅ use the imported flatmateRoutes

// // // Test route
// // app.get("/", (req, res) => {
// //   res.send("✅ Backend running successfully!");
// // });

// // // Connect DB and start server
// // connectDB()
// //   .then(() => {
// //     app.listen(PORT, () => {
// //       console.log(`🚀 Server running at http://localhost:${PORT}`);
// //     });
// //   })
// //   .catch((err) => {
// //     console.error("❌ Failed to connect to MongoDB:", err.message);
// //     process.exit(1);
// // //   });
// // import dotenv from "dotenv";
// // import express from "express";
// // import cors from "cors";
// // import multer from "multer";
// // import { v2 as cloudinary } from "cloudinary";
// // import { GoogleGenAI } from "@google/genai";

// // // import dotenv from "dotenv";
// // import connectDB from "./src/config/database.js";
// // import userAuthRoutes from "./routes/userAuth.js";
// // import flatRoutes from "./routes/flats.js";
// // import flatmateRoutes from "./routes/flatmate.js"; // ✅ import once
// // import roomShareRoutes from "./routes/roomshare.js"; // ✅ new route import
// // dotenv.config(); // Load env variables


// // cloudinary.config({
// //   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
// //   api_key: process.env.CLOUDINARY_API_KEY,
// //   api_secret: process.env.CLOUDINARY_API_SECRET,
// // });

// // const app = express(); // ✅ initialize app first
// // const PORT = process.env.PORT || 5000;
// // const client = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// // // ✅ Multer setup for temporary file storage
// // const storage = multer.diskStorage({});
// // const upload = multer({ storage });


// // const result = await client.models.generateContent({
// //   model: "gemini-2.5-flash-lite",
// //   input: "Give a random number between 1 and 100"
// // });

// // console.log(result.outputText());
// // // ✅ Middleware
// // app.use(cors({ origin: "http://localhost:5173" })); // frontend URL
// // app.use(express.json());
// // app.use("/uploads", express.static("uploads"));
// // app.use(express.urlencoded({ extended: true }));

// // // ✅ Routes
// // app.use("/userauth", userAuthRoutes);
// // app.use("/flats", flatRoutes);
// // app.use("/flatmates", flatmateRoutes); // consistent plural
// // // room share routes
// // app.use("/roomshare", roomShareRoutes);

// // // ✅ Test route
// // app.get("/", (req, res) => {
// //   res.send("✅ Backend running successfully!");
// // });

// // // ✅ Connect DB and start server
// // connectDB()
// //   .then(() => {
// //     app.listen(PORT, () => {
// //       console.log(`🚀 Server running at http://localhost:${PORT}`);
// //     });
// //   })
// //   .catch((err) => {
// //     console.error("❌ Failed to connect to MongoDB:", err.message);
// //     process.exit(1);
// //   });


// import express from "express";
// import dotenv from "dotenv";
// import { GoogleGenerativeAI } from "@google/generative-ai";

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // ✅ Initialize Gemini client
// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// // ✅ Middleware
// app.use(express.json());

// // ✅ Test route for Gemini API
// app.get("/test-gemini", async (req, res) => {
//   try {
//     const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" }); // ✅ stable model

//     // Example prompt
//     const result = await model.generateContent("what is the average price of flats in nigdi? ");
//     const responseText = result.response.text();

//     console.log("🎯 Gemini Output:", responseText);
//     res.json({
//       success: true,
//       output: responseText,
//     });
//   } catch (error) {
//     console.error("❌ Gemini API Error:", error);
//     res.status(500).json({
//       success: false,
//       error: error.message,
//     });
//   }
// });

// // ✅ Start server
// app.listen(PORT, () => {
//   console.log(`🚀 Server running at http://localhost:${PORT}`);
// });


// server.js
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { GoogleGenerativeAI } from "@google/generative-ai"; 
import propertyCalcRoutes from "./routes/propertyCalc.js";

import connectDB from "./src/config/database.js";
import userAuthRoutes from "./routes/userAuth.js";
import flatRoutes from "./routes/flats.js";
import flatmateRoutes from "./routes/flatmate.js";
import roomShareRoutes from "./routes/roomshare.js";

dotenv.config(); // ✅ Load env variables

// ✅ Cloudinary Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ✅ Initialize Express App
const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Initialize Gemini client (old SDK style)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// ✅ Multer setup for temporary file storage
const storage = multer.diskStorage({});
const upload = multer({ storage });

// ✅ Middleware
app.use(cors({ origin: "http://localhost:5173" })); // your frontend origin
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

// ✅ Test Gemini route

app.get("/test-gemini", async (req, res) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" }); // or gemini-1.5-pro
    const result = await model.generateContent("Give a random number between 1 and 100");

    console.log("🎯 Gemini Output:", result.response.text());
    res.json({
      success: true,
      output: result.response.text(),
    });
  } catch (err) {
    console.error("Gemini API Error:", err);
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});


// ✅ Your Existing Routes
app.use("/userauth", userAuthRoutes);
app.use("/flats", flatRoutes);
app.use("/flatmates", flatmateRoutes);
app.use("/roomshare", roomShareRoutes);
app.use("/property-calc", propertyCalcRoutes);
// ✅ Root Test Route
app.get("/", (req, res) => {
  res.send("✅ Backend running successfully with Gemini Flash 2.0 integration!");
});

app.get("/test-gemini", async (req, res) => {
  try {
    const result = await client.generate({
      model: "gemini-2.0-flash",
      input: "Give a random number between 1 and 100"
    });

    res.json({
      success: true,
      output: result.outputText(),
    });
  } catch (err) {
    console.error("Gemini API Error:", err);
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});

// ✅ Connect MongoDB and Start Server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to connect to MongoDB:", err.message);
    process.exit(1);
  });

