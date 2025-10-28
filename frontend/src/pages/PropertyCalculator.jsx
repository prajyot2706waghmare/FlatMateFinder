// // frontend/src/components/PropertyCalculator.jsx
// import React, { useState } from "react";
// import { calculatePropertyValue } from "../api/api"; 

// const PropertyCalculator = () => {
//   const [form, setForm] = useState({
//     city: "",
//     projectType: "",
//     locality: "",
//     propertyType: "",
//     bedrooms: "",
//     size: "",
//     furnishing: "",
//     sellOrRent: true,
//   });

//   const [result, setResult] = useState(null);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setForm((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Submitting form:", form);
//     try {
//     //   const res = await axios.post("/property-calc/calculate", form);
//      const res = await calculatePropertyValue(form); // ✅ Use imported API
//      console.log("API Response:", res.estimatedValue);
//       setResult(res.data);
//     } catch (err) {
//       alert(err.response?.data?.error || "Error calculating property value");
//     }
//   };

//   return (
//     <div className="max-w-lg mx-auto p-6 bg-white shadow rounded-2xl mt-10">
//       <h2 className="text-2xl font-semibold mb-4 text-center">🏡 Property Value Calculator</h2>
//       <form onSubmit={handleSubmit} className="space-y-3">
//         <input name="city" placeholder="City" value={form.city} onChange={handleChange} className="w-full p-2 border rounded" />
//         <input name="projectType" placeholder="Project Type" value={form.projectType} onChange={handleChange} className="w-full p-2 border rounded" />
//         <input name="locality" placeholder="Locality" value={form.locality} onChange={handleChange} className="w-full p-2 border rounded" />
//         <input name="propertyType" placeholder="Property Type" value={form.propertyType} onChange={handleChange} className="w-full p-2 border rounded" />
//         <input type="number" name="bedrooms" placeholder="Bedrooms" value={form.bedrooms} onChange={handleChange} className="w-full p-2 border rounded" />
//         <input type="number" name="size" placeholder="Size (sqft)" value={form.size} onChange={handleChange} className="w-full p-2 border rounded" />
//         <select name="furnishing" value={form.furnishing} onChange={handleChange} className="w-full p-2 border rounded">
//           <option value="">Select Furnishing</option>
//           <option value="Fully Furnished">Fully Furnished</option>
//           <option value="Semi Furnished">Semi Furnished</option>
//           <option value="Unfurnished">Unfurnished</option>
//         </select>

//         <label className="flex items-center space-x-2">
//           <input type="checkbox" name="sellOrRent" checked={form.sellOrRent} onChange={handleChange} />
//           <span>Sell (Uncheck for Rent)</span>
//         </label>

//         <button type="submit" className="bg-blue-600 text-white w-full p-2 rounded hover:bg-blue-700">
//           Calculate
//         </button>
//       </form>

//       {result && (
//         <div className="mt-4 text-center border-t pt-4">
//           <p className="text-lg font-semibold">Estimated Value:</p>
//           <p className="text-2xl font-bold text-green-600">
//             {result.estimatedValue.toLocaleString()} {result.unit}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PropertyCalculator;

import React, { useState } from "react";
import { calculatePropertyValue } from "../api/api"; // ✅ using centralized axios API

const PropertyCalculator = () => {
  const [form, setForm] = useState({
    city: "",
    projectType: "",
    locality: "",
    propertyType: "",
    bedrooms: "",
    bathrooms: "",
    balconies: "",
    size: "",
    furnishing: "",
    floorNumber: "",
    totalFloors: "",
    age: "",
    parking: "",
    facing: "",
    amenities: "",
    sellOrRent: true, // true = Sell, false = Rent
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // ✅ Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // ✅ Submit form data to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    console.log("Submitting form:", form);

    try {
      const res = await calculatePropertyValue({
        ...form,
        amenities: form.amenities
          ? form.amenities.split(",").map((a) => a.trim())
          : [],
      });

      console.log("✅ API Response:", res.data);
      setResult(res.data);
    } catch (err) {
      console.error("❌ API Error:", err);
      alert(err.response?.data?.error || "Error calculating property value");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-xl rounded-2xl mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-center text-blue-700">
        🏡 Property Value Calculator
      </h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="city"
          placeholder="City (e.g., Pune)"
          value={form.city}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="projectType"
          placeholder="Project Type (e.g., Residential)"
          value={form.projectType}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="locality"
          placeholder="Locality (e.g., Baner, Andheri)"
          value={form.locality}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="propertyType"
          placeholder="Property Type (e.g., Apartment, Villa)"
          value={form.propertyType}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          name="bedrooms"
          placeholder="Bedrooms"
          value={form.bedrooms}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          name="bathrooms"
          placeholder="Bathrooms"
          value={form.bathrooms}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="balconies"
          placeholder="Balconies"
          value={form.balconies}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="size"
          placeholder="Size (sqft)"
          value={form.size}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <select
          name="furnishing"
          value={form.furnishing}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select Furnishing</option>
          <option value="Fully Furnished">Fully Furnished</option>
          <option value="Semi Furnished">Semi Furnished</option>
          <option value="Unfurnished">Unfurnished</option>
        </select>

        <input
          type="number"
          name="floorNumber"
          placeholder="Floor Number"
          value={form.floorNumber}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="totalFloors"
          placeholder="Total Floors"
          value={form.totalFloors}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="age"
          placeholder="Property Age (years)"
          value={form.age}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="parking"
          placeholder="Parking Spaces"
          value={form.parking}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          name="facing"
          placeholder="Facing (e.g., North, East)"
          value={form.facing}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          name="amenities"
          placeholder="Amenities (comma-separated)"
          value={form.amenities}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="sellOrRent"
            checked={form.sellOrRent}
            onChange={handleChange}
          />
          <span>Sell (Uncheck for Rent)</span>
        </label>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white w-full p-2 rounded hover:bg-blue-700 transition"
        >
          {loading ? "Calculating..." : "Calculate"}
        </button>
      </form>

      {result && (
        <div className="mt-6 text-center border-t pt-4">
          <p className="text-lg font-semibold text-gray-700">
            Estimated Property Value
          </p>
          <p className="text-3xl font-bold text-green-600 mt-2">
            ₹ {result.estimatedValue.toLocaleString("en-IN")}
          </p>
          <p className="text-sm text-gray-500 mt-1">
            ({result.pricePerSqft.toLocaleString("en-IN")} ₹/sqft •{" "}
            {result.source})
          </p>
        </div>
      )}
    </div>
  );
};

export default PropertyCalculator;
