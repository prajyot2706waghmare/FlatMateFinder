// // // backend/controllers/propertyCalcController.js

// // export const calculatePropertyValue = async (req, res) => {
    
// //   try {
// //     const {
// //       city,
// //       projectType,
// //       locality,
// //       propertyType,
// //       bedrooms,
// //       size,
// //       furnishing,
// //       sellOrRent,
// //     } = req.body;

// //     if (!city || !projectType || !locality || !propertyType || !bedrooms || !size || !furnishing)
// //       return res.status(400).json({ error: "All fields are required" });

// //     // 🧮 Base price depending on city
// //     const cityBase = {
// //       Mumbai: 12000,
// //       Pune: 7000,
// //       Delhi: 10000,
// //       Bangalore: 9000,
// //       Hyderabad: 8000,
// //       Other: 5000,
// //     };

// //     let basePrice = cityBase[city] || cityBase["Other"];

// //     // 🏗️ Adjust by project type
// //     const projectFactor = {
// //       Apartment: 1.0,
// //       Villa: 1.3,
// //       "Gated Community": 1.2,
// //       Commercial: 1.5,
// //     }[projectType] || 1.0;

// //     // 🏙️ Locality adjustment (simplified)
// //     const localityFactor = locality.toLowerCase().includes("prime") ? 1.4 : 1.0;

// //     // 🏠 Property type adjustment
// //     const propertyTypeFactor = propertyType === "Residential" ? 1.0 : 1.2;

// //     // 🛏️ Bedroom adjustment
// //     const bedroomFactor = 1 + bedrooms * 0.1;

// //     // 📏 Size impact (price = base * size)
// //     let estimatedValue = basePrice * size;

// //     // 🪑 Furnishing adjustment
// //     const furnishingFactor =
// //       furnishing === "Fully Furnished" ? 1.2 : furnishing === "Semi Furnished" ? 1.1 : 1.0;

// //     estimatedValue *=
// //       projectFactor * localityFactor * propertyTypeFactor * bedroomFactor * furnishingFactor;

// //     // 🏷️ Sell vs Rent (rent usually ~0.3% of property value)
// //     const finalValue = sellOrRent ? estimatedValue : estimatedValue * 0.003;
// //     console.log("Calculated finalValue:", finalValue);
// //     res.json({
// //       estimatedValue: Math.round(finalValue),
// //       unit: sellOrRent ? "₹ (Sell Price)" : "₹/month (Rent)",
// //     });
// //   } catch (err) {
// //     console.error(err);
// //     res.status(500).json({ error: "Server Error" });
// //   }
// // };


// import dotenv from "dotenv";
// import { GoogleGenerativeAI } from "@google/generative-ai";

// dotenv.config();

// // ✅ Initialize Gemini client
// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// export const calculatePropertyValue = async (req, res) => {
//   try {
//     const {
//       city,
//       projectType,
//       locality,
//       propertyType,
//       bedrooms,
//       size,
//       furnishing,
//       sellOrRent,
//     } = req.body;

//     // ✅ Validate required fields
//     if (!city || !projectType || !locality || !propertyType || !bedrooms || !size || !furnishing) {
//       return res.status(400).json({ error: "All fields are required" });
//     }

//     // ✅ Try using Gemini API for realistic property price estimation
//     const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

//     const prompt = `
//       You are a real estate valuation expert. 
//       Estimate the average price per square foot for a property based on the following details:
//       - City: ${city}
//       - Locality: ${locality}
//       - Project Type: ${projectType}
//       - Property Type: ${propertyType}
//       - Bedrooms: ${bedrooms}
//       - Size (sqft): ${size}
//       - Furnishing: ${furnishing}
//       - Context: ${sellOrRent ? "Sale" : "Rent"}
        
//       Give only a single numeric value (in ₹ per sq.ft for sale, or ₹ per month per sq.ft for rent) — no text or explanation.
//     `;

//     let baseRate = null;

//     try {
//       const result = await model.generateContent(prompt);
//       const responseText = result.response.text();

//       // Extract first number from Gemini response
//       const match = responseText.match(/\d+(?:,\d{3})*(?:\.\d+)?/);
//       if (match) {
//         baseRate = parseFloat(match[0].replace(/,/g, ""));
//         console.log(`🏠 Gemini Estimated Base Rate: ₹${baseRate}/sqft`);
//       }
//     } catch (aiErr) {
//       console.error("⚠️ Gemini API Error, using fallback rates:", aiErr.message);
//     }

//     // ✅ If Gemini fails or gives invalid data, use fallback base rates
//     const cityBase = {
//       Mumbai: 12000,
//       Pune: 7000,
//       Delhi: 10000,
//       Bangalore: 9000,
//       Hyderabad: 8000,
//       Other: 5000,
//     };

//     let basePrice = baseRate || cityBase[city] || cityBase["Other"];

//     // 🧮 Apply multipliers
//     const projectFactor =
//       {
//         Apartment: 1.0,
//         Villa: 1.3,
//         "Gated Community": 1.2,
//         Commercial: 1.5,
//       }[projectType] || 1.0;

//     const localityFactor = locality.toLowerCase().includes("prime") ? 1.4 : 1.0;
//     const propertyTypeFactor = propertyType === "Residential" ? 1.0 : 1.2;
//     const bedroomFactor = 1 + bedrooms * 0.1;

//     const furnishingFactor =
//       furnishing === "Fully Furnished" ? 1.2 :
//       furnishing === "Semi Furnished" ? 1.1 :
//       1.0;

//     // 📏 Total estimated value
//     let estimatedValue = basePrice * size * projectFactor * localityFactor * propertyTypeFactor * bedroomFactor * furnishingFactor;

//     // 💰 Adjust for rent vs sale
//     const finalValue = sellOrRent ? estimatedValue : estimatedValue * 0.003;

//     console.log("✅ Calculated Final Value:", finalValue);

//     res.json({
//       estimatedValue: Math.round(finalValue),
//       unit: sellOrRent ? "₹ (Sell Price)" : "₹/month (Rent)",
//       source: baseRate ? "Gemini AI (Live Estimate)" : "Fallback (Preset Rates)",
//     });

//   } catch (err) {
//     console.error("❌ Server Error:", err);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };


import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const calculatePropertyValue = async (req, res) => {
  try {
    const {
      city,
      projectType,
      locality,
      propertyType,
      bedrooms,
      bathrooms,
      balconies,
      size,
      furnishing,
      sellOrRent,
      floorNumber,
      totalFloors,
      age,
      parking,
      amenities = [],
      facing,
    } = req.body;

    // ✅ Validate required fields
    if (!city || !projectType || !locality || !propertyType || !bedrooms || !size || !furnishing || age === undefined) {
      return res.status(400).json({ error: "Required fields missing" });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const prompt = `
You are a professional Indian real estate valuer with access to the latest 2025 market trends, property listings, and government rate data.

Estimate the **average price per square foot** for the given property.

Provide the value in **Indian Rupees (₹)**, based on realistic market averages for that city and locality — not a range.

### Property Details
- City: ${city}
- Locality: ${locality}
- Project Type: ${projectType}
- Property Type: ${propertyType}
- Bedrooms: ${bedrooms}
- Bathrooms: ${bathrooms || "N/A"}
- Balconies: ${balconies || 0}
- Size: ${size} sqft
- Furnishing: ${furnishing}
- Floor: ${floorNumber || "N/A"} of ${totalFloors || "N/A"}
- Property Age: ${age || "N/A"} years
- Parking: ${parking || 0} spaces
- Facing: ${facing || "N/A"}
- Amenities: ${amenities?.length > 0 ? amenities.join(", ") : "None"}
- Context: ${sellOrRent ? "Sale" : "Rent"}

### Important Instructions
1. Use **realistic data** for ${city}, considering ${locality}’s average market value.
2. If ${locality} is a premium or central area, increase price accordingly.
3. If it's for rent, estimate **monthly rent per sqft** (usually around 0.3% of the sale value).
4. Consider the impact of amenities, furnishing, and project type.
5. Return **only one numeric value** (no units, no ₹ symbol, no text, no explanation).

Example Output:
8500
`;

    let baseRate = null;

    try {
      const result = await model.generateContent(prompt);
      const responseText = result.response.text();
      const match = responseText.match(/\d+(?:,\d{3})*(?:\.\d+)?/);
      if (match) {
        baseRate = parseFloat(match[0].replace(/,/g, ""));
        console.log(`🏠 Gemini Estimated Base Rate: ₹${baseRate}/sqft`);
      }
    } catch (aiErr) {
      console.error("⚠️ Gemini API Error:", aiErr.message);
    }

    // ✅ Fallback rates
    const cityBase = {
      Mumbai: 12000, Pune: 7000, Delhi: 10000, 
      Bangalore: 9000, Hyderabad: 8000, Chennai: 7500,
      Kolkata: 6000, Ahmedabad: 5500, Other: 5000,
    };

    let basePrice = baseRate || cityBase[city] || cityBase["Other"];

    // 🧮 Apply multipliers
    const projectFactor = { Residential: 1.0, Commercial: 1.5, Industrial: 0.8, Agricultural: 0.6 }[projectType] || 1.0;
    const propertyTypeFactor = { Apartment: 1.0, Villa: 1.3, "Independent House": 1.25, Studio: 0.9, Penthouse: 1.5, Plot: 0.7 }[propertyType] || 1.0;
    const bedroomFactor = 1 + bedrooms * 0.08;
    const bathroomFactor = bathrooms ? 1 + bathrooms * 0.03 : 1.0;
    const furnishingFactor = { "Fully Furnished": 1.2, "Semi Furnished": 1.1, "Unfurnished": 1.0 }[furnishing] || 1.0;
    
    // 🏢 Floor premium (higher floors usually cost more, but top floor may vary)
    let floorFactor = 1.0;
    if (floorNumber && totalFloors) {
      const floorRatio = floorNumber / totalFloors;
      if (floorRatio > 0.7) floorFactor = 1.1; // Upper floors
      else if (floorRatio < 0.2) floorFactor = 0.95; // Lower floors
    }

    // 📅 Age depreciation (newer properties worth more)
    const ageFactor = age === 0 ? 1.15 : age <= 5 ? 1.0 : 1 - (age - 5) * 0.02;
    
    // 🚗 Parking premium
    const parkingFactor = parking ? 1 + parking * 0.03 : 1.0;
    
    // 🌟 Amenities boost
    const amenityFactor = 1 + amenities.length * 0.02;
    
    // 🧭 Facing preference (North/East preferred in India)
    const facingFactor = ["North", "East", "North-East"].includes(facing) ? 1.05 : 1.0;

    // 📏 Calculate total value
    let estimatedValue = basePrice * size * 
      projectFactor * propertyTypeFactor * bedroomFactor * bathroomFactor *
      furnishingFactor * floorFactor * ageFactor * parkingFactor * 
      amenityFactor * facingFactor;

    // 💰 Adjust for rent vs sale
    const finalValue = sellOrRent ? estimatedValue : estimatedValue * 0.003;

    console.log("✅ Calculated Final Value:", finalValue);

    res.json({
      estimatedValue: Math.round(finalValue),
      unit: sellOrRent ? "₹" : "₹/month",
      pricePerSqft: Math.round(finalValue / size),
      source: baseRate ? "Gemini AI" : "Fallback Rates",
      marketTrend: "Rising", // Can be enhanced with actual market data
    });

  } catch (err) {
    console.error("❌ Server Error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};