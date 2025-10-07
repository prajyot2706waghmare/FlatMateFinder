// // // import dotenv from "dotenv";
// // // import express from "express";
// // // import cors from "cors";
// // // import connectDB from "./src/config/database.js";
// // // import userAuthRoutes from "./routes/userAuth.js";
// // // // import searchRoutes from "./routes/search.js";
// // // import flatRoutes from "./routes/flats.js";
// // // // server.js (near other imports)
// // // import flatmateRoutes from "./routes/flatmate.js";

// // // // ... after middleware and before test route
// // // app.use("/flatmates", flatmateRoutes);

// // // dotenv.config();

// // // const app = express();
// // // const PORT = process.env.PORT || 5000;

// // // // Middleware
// // // app.use(cors({ origin: "http://localhost:5173" })); // frontend URL
// // // app.use(express.json());
// // // app.use("/uploads", express.static("uploads"));

// // // // Routes
// // // app.use("/flats", flatRoutes);
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
// // //import flatmateRoutes from "./routes/flatmate.js";
// // //import flatmateRoutes from "./routes/flatmate.js";
// // // ...
// // //app.use("/flatmates", flatmateRoutes);

// // dotenv.config(); // ✅ load env first

// // const app = express(); // ✅ app initialized before app.use
// // const PORT = process.env.PORT || 5000;

// // // Middleware
// // app.use(cors({ origin: "http://localhost:5173" })); // frontend URL
// // app.use(express.json());
// // app.use("/uploads", express.static("uploads"));

// // // Routes
// // app.use("/flats", flatRoutes);
// // app.use("/flatmates", flatmateRoutes);  // ✅ now works
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
// import dotenv from "dotenv";
// import express from "express";
// import cors from "cors";

// import connectDB from "./src/config/database.js";
// import userAuthRoutes from "./routes/userAuth.js";
// // import searchRoutes from "./routes/search.js";
// import flatRoutes from "./routes/flats.js";
// //import flatmateRoutes from "./routes/flatmate.js"; // ✅ make sure this file exists in routes/
// import flatmateRoutes from "./routes/flatmate.js";

// app.use("/flatmates", flatmateRoutes);

// dotenv.config(); // ✅ load env first

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors({ origin: "http://localhost:5173" })); // frontend URL
// app.use(express.json());
// app.use("/uploads", express.static("uploads"));

// // Routes
// app.use("/flats", flatRoutes);
// app.use("/flatmate", flatmateRoutes); // ✅ now properly imported
// app.use("/userauth", userAuthRoutes);

// // Test route
// app.get("/", (req, res) => {
//   res.send("✅ Backend running successfully!");
// });

// // Connect DB and start server
// connectDB()
//   .then(() => {
//     app.listen(PORT, () =>
//       console.log(`🚀 Server running at http://localhost:${PORT}`)
//     );
//   })
//   .catch((err) => {
//     console.error("❌ Failed to connect to MongoDB:", err.message);
//     process.exit(1);
//   });
// import dotenv from "dotenv";
// import express from "express";
// import cors from "cors";

// import connectDB from "./src/config/database.js";
// import userAuthRoutes from "./routes/userAuth.js";
// import flatRoutes from "./routes/flats.js";
// import flatmateRoutes from "./routes/flatmate.js"; // ✅ make sure this file exists
// const flatmateRoutes = require("./routes/flatmate.js");
// // Path to your route file

// dotenv.config(); // ✅ load env first

// const app = express(); // ✅ initialize app first
// const PORT = process.env.PORT || 5000;

// // ✅ Middleware
// app.use(cors({ origin: "http://localhost:5173" })); // frontend URL
// app.use(express.json());
// app.use("/uploads", express.static("uploads"));
// app.use("/api/flatmates", flatmatesRoute);

// // ✅ Routes
// app.use("/userauth", userAuthRoutes);
// app.use("/flats", flatRoutes);
// app.use("/flatmates", flatmateRoutes); // keep consistent (plural is better)

// // ✅ Test route
// app.get("/", (req, res) => {
//   res.send("✅ Backend running successfully!");
// });

// // ✅ Connect DB and start server
// connectDB()
//   .then(() => {
//     app.listen(PORT, () => {
//       console.log(`🚀 Server running at http://localhost:${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.error("❌ Failed to connect to MongoDB:", err.message);
//     process.exit(1);
//   });
//   export default router;
// import dotenv from "dotenv";
// import express from "express";
// import cors from "cors";

// import connectDB from "./src/config/database.js";
// import userAuthRoutes from "./routes/userAuth.js";
// import flatRoutes from "./routes/flats.js";
// import flatmateRoutes from "./routes/flatmate.js"; // ✅ import once
// app.use("/flatmates", flatmateRoutes);
// dotenv.config(); // Load env variables

// const app = express(); // Initialize app
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors({ origin: "http://localhost:5173" }));
// app.use(express.json());
// app.use("/uploads", express.static("uploads"));

// // Routes
// app.use("/userauth", userAuthRoutes);
// app.use("/flats", flatRoutes);
// app.use("/flatmates", flatmateRoutes); // ✅ use the imported flatmateRoutes

// // Test route
// app.get("/", (req, res) => {
//   res.send("✅ Backend running successfully!");
// });

// // Connect DB and start server
// connectDB()
//   .then(() => {
//     app.listen(PORT, () => {
//       console.log(`🚀 Server running at http://localhost:${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.error("❌ Failed to connect to MongoDB:", err.message);
//     process.exit(1);
//   });
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";
// import dotenv from "dotenv";
import connectDB from "./src/config/database.js";
import userAuthRoutes from "./routes/userAuth.js";
import flatRoutes from "./routes/flats.js";
import flatmateRoutes from "./routes/flatmate.js"; // ✅ import once
import roomShareRoutes from "./routes/roomShare.js"; // ✅ new route import
dotenv.config(); // Load env variables


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express(); // ✅ initialize app first
const PORT = process.env.PORT || 5000;

// ✅ Middleware
app.use(cors({ origin: "http://localhost:5173" })); // frontend URL
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// ✅ Routes
app.use("/userauth", userAuthRoutes);
app.use("/flats", flatRoutes);
app.use("/flatmates", flatmateRoutes); // consistent plural
// room share routes
app.use("/roomshare", roomShareRoutes);

// ✅ Test route
app.get("/", (req, res) => {
  res.send("✅ Backend running successfully!");
});

// ✅ Connect DB and start server
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

