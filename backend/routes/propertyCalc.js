// // backend/routes/propertyCalc.js
// import express from "express";
// import { calculatePropertyValue } from "../controllers/propertyCalcController.js";

// const router = express.Router();

// router.post("/calculate", calculatePropertyValue);

// export default router;

import express from "express";
import { calculatePropertyValue } from "../controllers/propertyCalcController.js";

const router = express.Router();

router.post("/calculate", calculatePropertyValue);

export default router;
