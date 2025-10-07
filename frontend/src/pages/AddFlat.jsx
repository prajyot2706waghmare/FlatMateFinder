
// import React, { useState } from "react";
// import { addFlat } from "../api/userApi";
// import { useNavigate } from "react-router-dom";

// export default function AddFlat() {
//   const navigate = useNavigate();
  
//   // Form state
//   const [formData, setFormData] = useState({
//     title: "",
//     location: "",
//     price: "",
//     duration: "MONTHLY",
//     property: "",
//     furnishing: "",
//     genderPreference: "",
//     agePreference: "",
//     availableFrom: "",
//     facilities: "",
//     image: ""
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   // Handle form submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     // console.log("Submitting form data:", formData);
//     try {
//       // Convert facilities to array if comma-separated
//       const dataToSend = { 
//         ...formData, 
//         facilities: formData.facilities.split(",").map(f => f.trim())
//       };
      
//       await addFlat(dataToSend);
//       setLoading(false);
//       navigate("/flats"); // Redirect to flats page
//     } catch (err) {
//       setError(err.message || "Failed to add flat. Please try again.");
//       setLoading(false);
//     }
//   };



//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
//       {/* Advanced animated background */}
//       <div className="absolute inset-0">
//         {/* Floating geometric shapes */}
//         <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
//           {[...Array(8)].map((_, i) => (
//             <div
//               key={`shape-${i}`}
//               className="absolute animate-drift opacity-20"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//                 animationDelay: `${Math.random() * 15}s`,
//                 animationDuration: `${20 + Math.random() * 30}s`
//               }}
//             >
//               <div 
//                 className={`${
//                   i % 4 === 0 ? 'rounded-full' : 
//                   i % 4 === 1 ? 'rounded-lg rotate-45' :
//                   i % 4 === 2 ? 'rounded-full' : 'rounded-none rotate-12'
//                 } bg-gradient-to-br ${
//                   ['from-purple-500/30 to-pink-500/30', 
//                    'from-blue-500/30 to-cyan-500/30',
//                    'from-emerald-500/30 to-teal-500/30',
//                    'from-orange-500/30 to-red-500/30'][i % 4]
//                 } backdrop-blur-3xl border border-white/10`}
//                 style={{
//                   width: `${60 + Math.random() * 120}px`,
//                   height: `${60 + Math.random() * 120}px`,
//                 }}
//               ></div>
//             </div>
//           ))}
//         </div>

//         {/* Animated particles */}
//         <div className="absolute inset-0">
//           {[...Array(20)].map((_, i) => (
//             <div
//               key={`particle-${i}`}
//               className="absolute w-1 h-1 bg-white rounded-full animate-sparkle"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//                 animationDelay: `${Math.random() * 8}s`,
//                 animationDuration: `${3 + Math.random() * 4}s`
//               }}
//             ></div>
//           ))}
//         </div>

//         {/* Gradient orbs */}
//         <div className="absolute inset-0">
//           {[...Array(4)].map((_, i) => (
//             <div
//               key={`orb-${i}`}
//               className="absolute animate-pulse-slow filter blur-3xl"
//               style={{
//                 left: `${15 + i * 25}%`,
//                 top: `${20 + Math.random() * 60}%`,
//                 animationDelay: `${i * 2}s`,
//                 animationDuration: `${8 + i * 2}s`
//               }}
//             >
//               <div 
//                 className={`rounded-full ${
//                   ['bg-purple-500/20', 'bg-blue-500/20', 'bg-emerald-500/20', 'bg-pink-500/20'][i]
//                 }`}
//                 style={{
//                   width: `${200 + Math.random() * 200}px`,
//                   height: `${200 + Math.random() * 200}px`,
//                 }}
//               ></div>
//             </div>
//           ))}
//         </div>

//         {/* Mesh gradient overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 via-transparent to-indigo-900/50"></div>
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.3)_100%)]"></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 py-20 px-4">
//         <div className="max-w-4xl mx-auto">
//           {/* Header */}
//           <div className="text-center mb-12">
//             <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
//               List Your 
//               <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent block">
//                 Dream Property
//               </span>
//             </h1>
//             <p className="text-xl text-white/80 max-w-2xl mx-auto">
//               Join thousands of property owners and reach millions of potential tenants
//             </p>
//           </div>

//           {/* Form Container */}
//           <div className="bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl p-8 md:p-12">
//             {error && (
//               <div className="mb-6 bg-red-500/20 backdrop-blur-sm border border-red-400/30 rounded-2xl p-4">
//                 <p className="text-red-200 text-center font-semibold">{error}</p>
//               </div>
//             )}

//             <form onSubmit={handleSubmit} className="space-y-6">
//               {/* Form Grid */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {/* Title */}
//                 <div className="md:col-span-2">
//                   <label className="block text-white/90 font-semibold mb-3 text-lg">
//                     Property Title
//                   </label>
//                   <input
//                     type="text"
//                     name="title"
//                     placeholder="e.g., Spacious 2BHK in Prime Location"
//                     value={formData.title}
//                     onChange={handleChange}
//                     className="w-full p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
//                     required
//                   />
//                 </div>

//                 {/* Location */}
//                 <div>
//                   <label className="block text-white/90 font-semibold mb-3 text-lg">
//                     Location
//                   </label>
//                   <input
//                     type="text"
//                     name="location"
//                     placeholder="e.g., Pune, Maharashtra"
//                     value={formData.location}
//                     onChange={handleChange}
//                     className="w-full p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
//                     required
//                   />
//                 </div>

//                 {/* Price */}
//                 <div>
//                   <label className="block text-white/90 font-semibold mb-3 text-lg">
//                     Rent Amount (₹)
//                   </label>
//                   <input
//                     type="number"
//                     name="price"
//                     placeholder="e.g., 25000"
//                     value={formData.price}
//                     onChange={handleChange}
//                     className="w-full p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
//                     required
//                   />
//                 </div>

//                 {/* Property Type */}
//                 <div>
//                   <label className="block text-white/90 font-semibold mb-3 text-lg">
//                     Property Type
//                   </label>
//                   <select
//                     name="property"
//                     value={formData.property}
//                     onChange={handleChange}
//                     className="w-full p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
//                     required
//                   >
//                     <option value="" className="bg-gray-900">Select Property Type</option>
//                     <option value="1RK" className="bg-gray-900">1RK</option>
//                     <option value="1BHK" className="bg-gray-900">1BHK</option>
//                     <option value="2BHK" className="bg-gray-900">2BHK</option>
//                     <option value="3BHK" className="bg-gray-900">3BHK</option>
//                     <option value="4BHK+" className="bg-gray-900">4BHK+</option>
//                   </select>
//                 </div>

//                 {/* Furnishing */}
//                 <div>
//                   <label className="block text-white/90 font-semibold mb-3 text-lg">
//                     Furnishing Status
//                   </label>
//                   <select
//                     name="furnishing"
//                     value={formData.furnishing}
//                     onChange={handleChange}
//                     className="w-full p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
//                     required
//                   >
//                     <option value="" className="bg-gray-900">Select Furnishing</option>
//                     <option value="Furnished" className="bg-gray-900">Fully Furnished</option>
//                     <option value="Semi-Furnished" className="bg-gray-900">Semi Furnished</option>
//                     <option value="Unfurnished" className="bg-gray-900">Unfurnished</option>
//                   </select>
//                 </div>

//                 {/* Gender Preference */}
//                 <div>
//                   <label className="block text-white/90 font-semibold mb-3 text-lg">
//                     Gender Preference
//                   </label>
//                   <select
//                     name="genderPreference"
//                     value={formData.genderPreference}
//                     onChange={handleChange}
//                     className="w-full p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
//                     required
//                   >
//                     <option value="" className="bg-gray-900">Select Preference</option>
//                     <option value="Any" className="bg-gray-900">Any</option>
//                     <option value="Male" className="bg-gray-900">Male Only</option>
//                     <option value="Female" className="bg-gray-900">Female Only</option>
//                     <option value="Family" className="bg-gray-900">Family Only</option>
//                   </select>
//                 </div>

//                 {/* Age Preference */}
//                 <div>
//                   <label className="block text-white/90 font-semibold mb-3 text-lg">
//                     Age Preference
//                   </label>
//                   <input
//                     type="text"
//                     name="agePreference"
//                     placeholder="e.g., 25-35 years"
//                     value={formData.agePreference}
//                     onChange={handleChange}
//                     className="w-full p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
//                   />
//                 </div>

//                 {/* Available From */}
//                 <div>
//                   <label className="block text-white/90 font-semibold mb-3 text-lg">
//                     Available From
//                   </label>
//                   <input
//                     type="date"
//                     name="availableFrom"
//                     value={formData.availableFrom}
//                     onChange={handleChange}
//                     className="w-full p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
//                     required
//                   />
//                 </div>

//                 {/* Duration */}
//                 <div>
//                   <label className="block text-white/90 font-semibold mb-3 text-lg">
//                     Rental Duration
//                   </label>
//                   <select
//                     name="duration"
//                     value={formData.duration}
//                     onChange={handleChange}
//                     className="w-full p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
//                   >
//                     <option value="MONTHLY" className="bg-gray-900">Monthly</option>
//                     <option value="YEARLY" className="bg-gray-900">Yearly</option>
//                     <option value="WEEKLY" className="bg-gray-900">Weekly</option>
//                   </select>
//                 </div>

//                 {/* Facilities */}
//                 <div className="md:col-span-2">
//                   <label className="block text-white/90 font-semibold mb-3 text-lg">
//                     Facilities & Amenities
//                   </label>
//                   <input
//                     type="text"
//                     name="facilities"
//                     placeholder="e.g., WiFi, Gym, Swimming Pool, Parking, AC"
//                     value={formData.facilities}
//                     onChange={handleChange}
//                     className="w-full p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
//                   />
//                   <p className="text-white/60 text-sm mt-2">Separate multiple facilities with commas</p>
//                 </div>

//                 {/* Image URL */}
//                 <div className="md:col-span-2">
//                   <label className="block text-white/90 font-semibold mb-3 text-lg">
//                     Property Image URL
//                   </label>
//                   <input
//                     type="url"
//                     name="image"
//                     placeholder="https://example.com/your-property-image.jpg"
//                     value={formData.image}
//                     onChange={handleChange}
//                     className="w-full p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
//                     required
//                   />
//                 </div>
//               </div>

//               {/* Submit Button */}
//               <div className="pt-6">
//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 hover:from-cyan-500 hover:via-blue-600 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-600 text-white py-5 px-8 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl disabled:transform-none disabled:shadow-lg"
//                 >
//                   {loading ? (
//                     <div className="flex items-center justify-center space-x-2">
//                       <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
//                       <span>Publishing Property...</span>
//                     </div>
//                   ) : (
//                     <div className="flex items-center justify-center space-x-2">
//                       <span>Publish Property</span>
//                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
//                       </svg>
//                     </div>
//                   )}
//                 </button>
//               </div>

//               {/* Additional Info */}
//               <div className="text-center pt-4">
//                 <p className="text-white/70 text-sm">
//                   By listing your property, you agree to our terms and conditions
//                 </p>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>

//       {/* Advanced custom animations */}
//       <style jsx>{`
//         @keyframes drift {
//           0% {
//             transform: translate(0, 0) rotate(0deg) scale(1);
//             opacity: 0.2;
//           }
//           25% {
//             transform: translate(50px, -30px) rotate(90deg) scale(1.1);
//             opacity: 0.4;
//           }
//           50% {
//             transform: translate(-30px, -60px) rotate(180deg) scale(0.9);
//             opacity: 0.3;
//           }
//           75% {
//             transform: translate(-80px, 30px) rotate(270deg) scale(1.2);
//             opacity: 0.5;
//           }
//           100% {
//             transform: translate(0, 0) rotate(360deg) scale(1);
//             opacity: 0.2;
//           }
//         }

//         @keyframes sparkle {
//           0%, 100% {
//             opacity: 0;
//             transform: scale(0) rotate(0deg);
//           }
//           50% {
//             opacity: 1;
//             transform: scale(1) rotate(180deg);
//           }
//         }

//         @keyframes pulse-slow {
//           0%, 100% {
//             opacity: 0.2;
//             transform: scale(1);
//           }
//           50% {
//             opacity: 0.6;
//             transform: scale(1.2);
//           }
//         }

//         .animate-drift {
//           animation: drift infinite ease-in-out;
//         }

//         .animate-sparkle {
//           animation: sparkle infinite ease-in-out;
//         }

//         .animate-pulse-slow {
//           animation: pulse-slow infinite ease-in-out;
//         }

//         /* Form input focus effects */
//         input:focus, select:focus {
//           background: rgba(255, 255, 255, 0.15) !important;
//         }

//         /* Custom scrollbar */
//         ::-webkit-scrollbar {
//           width: 8px;
//         }

//         ::-webkit-scrollbar-track {
//           background: rgba(255, 255, 255, 0.1);
//           border-radius: 4px;
//         }

//         ::-webkit-scrollbar-thumb {
//           background: rgba(255, 255, 255, 0.3);
//           border-radius: 4px;
//         }

//         ::-webkit-scrollbar-thumb:hover {
//           background: rgba(255, 255, 255, 0.5);
//         }
//       `}</style>
//     </div>
//   );
// }


import React, { useState } from "react";
import { addFlat } from "../api/userApi";
import { useNavigate } from "react-router-dom";

export default function AddFlat() {
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    price: "",
    duration: "MONTHLY",
    property: "",
    furnishing: "",
    genderPreference: "",
    agePreference: "",
    availableFrom: "",
    facilities: "",
    image: null, // now a file
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // Handle input changes
  // const handleChange = (e) => {
  //   const { name, value, files } = e.target;
  //   if (name === "image") {
  //     setFormData(prev => ({ ...prev, image: files[0] }));
  //   } else {
  //     setFormData(prev => ({ ...prev, [name]: value }));
  //   }
  // };

  const handleChange = (e) => {
  const { name, value, files } = e.target;
  if (name === "image") {
    setFormData(prev => ({ ...prev, image: files[0] }));
    console.log("Selected image file:", files[0]);
  } else {
    setFormData(prev => ({ ...prev, [name]: value }));
    console.log(`${name}:`, value);
  }
};


  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);
    // setError("");
    // setSuccessMsg("");

    try {
      const formPayload = new FormData();
  Object.entries(formData).forEach(([key, value]) => {
    if (value !== null) formPayload.append(key, value);
  });

  console.log("FormData entries:");
  for (let pair of formPayload.entries()) {
    console.log(pair[0], pair[1]);
  }

    //   // Use FormData to send file + other fields
    //   const formPayload = new FormData();
    //   Object.entries(formData).forEach(([key, value]) => {
    //     if (key === "facilities") {
    //       formPayload.append(key, value); // backend will split
    //     } else if (value !== null) {
    //       formPayload.append(key, value);
    //     }
    //   });
    //   for (let pair of formPayload.entries()) {
    //         console.log(pair[0], pair[1]);
    //       }
      
      await addFlat(formPayload); // second param for FormData flag
      setLoading(false);
      setSuccessMsg("Flat submitted successfully!");
      setTimeout(() => navigate("/flats"), 1500); // redirect after 1.5s
    } catch (err) {
      setError(err.message || "Failed to add flat. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Content */}
      <div className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
              List Your 
              <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent block">
                Dream Property
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Join thousands of property owners and reach millions of potential tenants
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl p-8 md:p-12">
            {error && <div className="mb-6 text-red-500 text-center font-semibold">{error}</div>}
            {successMsg && <div className="mb-6 text-green-400 text-center font-semibold">{successMsg}</div>}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title */}
              <div>
                <label className="block text-white mb-2 font-semibold">Property Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full p-4 rounded-xl bg-white/10 text-white placeholder-white/60 border border-white/20"
                />
              </div>

              {/* Location */}
              <div>
                <label className="block text-white mb-2 font-semibold">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full p-4 rounded-xl bg-white/10 text-white placeholder-white/60 border border-white/20"
                />
              </div>

              {/* Price */}
              <div>
                <label className="block text-white mb-2 font-semibold">Price (₹)</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  className="w-full p-4 rounded-xl bg-white/10 text-white placeholder-white/60 border border-white/20"
                />
              </div>

              {/* Available From */}
              <div>
                <label className="block text-white mb-2 font-semibold">Available From</label>
                <input
                  type="date"
                  name="availableFrom"
                  value={formData.availableFrom}
                  onChange={handleChange}
                  required
                  className="w-full p-4 rounded-xl bg-white/10 text-white placeholder-white/60 border border-white/20"
                />
              </div>

              {/* Facilities */}
              <div>
                <label className="block text-white mb-2 font-semibold">Facilities (comma-separated)</label>
                <input
                  type="text"
                  name="facilities"
                  value={formData.facilities}
                  onChange={handleChange}
                  placeholder="WiFi, AC, Gym"
                  className="w-full p-4 rounded-xl bg-white/10 text-white placeholder-white/60 border border-white/20"
                />
              </div>

              {/* Image Upload */}
              <div>
                <label className="block text-white mb-2 font-semibold">Upload Image</label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
                  className="w-full text-white"
                  required
                />
              </div>

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-4 rounded-xl font-bold"
                >
                  {loading ? "Uploading..." : "Submit Property"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

