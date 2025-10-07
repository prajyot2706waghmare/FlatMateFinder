// // import React, { useEffect, useState } from "react";
// // import { getFlatmates } from "../api/userApi";
// // import { Link } from "react-router-dom";

// // export default function FindFlatmate() {
// //   const [flatmates, setFlatmates] = useState([]);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const res = await getFlatmates();
// //         setFlatmates(res.data);
// //       } catch (err) {
// //         console.error("Error fetching flatmates:", err);
// //       }
// //     };
// //     fetchData();
// //   }, []);

// //   return (
// //     <div className="p-6">
// //       <h2 className="text-2xl font-bold">Find Flatmates</h2>
// //       <ul className="mt-4">
// //         {flatmates.map((mate) => (
// //           <li key={mate._id} className="mb-3">
// //             <Link to={`/flatmates/${mate._id}`}>
// //               {mate.name} – {mate.location}
// //             </Link>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }
// src/pages/FindFlatmate.jsx
// import React, { useEffect, useState } from "react";
// import { getFlatmates } from "../api";
// import { getFlatmates } from "../api/api.js";
// function FindFlatmate() {
//   const [flatmates, setFlatmates] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const res = await getFlatmates();
//         setFlatmates(res.data);
//       } catch (err) {
//         console.error("Error fetching flatmates:", err);
//       }
//     }
//     fetchData();
//   }, []);

//   return (
//     <main className="max-w-5xl mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-4">Available Flatmates</h1>

//       {flatmates.length === 0 ? (
//         <p>No flatmates found.</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {flatmates.map((mate) => (
//             <div
//               key={mate._id}
//               className="p-4 bg-white rounded-xl shadow-md border"
//             >
//               <h2 className="font-semibold text-lg">{mate.name}</h2>
//               <p>Age: {mate.age}</p>
//               <p>Gender: {mate.gender}</p>
//               <p>
//                 Location: {mate.location?.city}, {mate.location?.state}
//               </p>
//               <p>Budget: ₹{mate.budget}</p>
//               <p>Occupation: {mate.occupation}</p>
//               <p>Preferences: {mate.preferences?.join(", ")}</p>
//               <p className="text-sm text-gray-500 mt-2">
//                 📧 {mate.contact?.email}
//               </p>
//             </div>
//           ))}
//         </div>
//       )}
//     </main>
//   );
// }

// frontend/src/pages/Findflatmate.jsx
// import React from "react";

// export default function FindFlatmate() {
//   return (
//     <div>
//       <h2>Hello Flatmate 👋</h2>
//     </div>
//   );
// }


// export default FindFlatmate;
// src/pages/FindFlatmate.jsx
// import React, { useEffect, useState } from "react";
// import { getFlatmates } from "../api/api.js"; // ✅ make sure this path is correct

// function FindFlatmate() {
//   const [flatmates, setFlatmates] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const res = await getFlatmates();
//         setFlatmates(res.data);
//       } catch (err) {
//         console.error("Error fetching flatmates:", err);
//       }
//     }
//     fetchData();
//   }, []);

//   return (
//     <main className="max-w-5xl mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-4">Available Flatmates</h1>

//       {flatmates.length === 0 ? (
//         <p>No flatmates found.</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {flatmates.map((mate) => (
//             <div
//               key={mate._id}
//               className="p-4 bg-white rounded-xl shadow-md border"
//             >
//               <h2 className="font-semibold text-lg">{mate.name}</h2>
//               <p>Age: {mate.age}</p>
//               <p>Gender: {mate.gender}</p>
//               <p>
//                 Location: {mate.location?.city}, {mate.location?.state}
//               </p>
//               <p>Budget: ₹{mate.budget}</p>
//               <p>Occupation: {mate.occupation}</p>
//               <p>Preferences: {mate.preferences?.join(", ")}</p>
//               <p className="text-sm text-gray-500 mt-2">
//                 📧 {mate.contact?.email}
//               </p>
//             </div>
//           ))}
//         </div>
//       )}
//     </main>
//   );
// }

// export default FindFlatmate;
// src/pages/FindFlatmate.jsx
// import React from "react";

// export default function FindFlatmate() {
//   return (
//     <div>
//       <h2>Hello FindFlatmate 👋</h2>
//     </div>
//   );
// }
// src/pages/AddFlatmate.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function AddFlatmate() {
  return (
    <div>
       <Link to="/dashboard" className="text-blue-600 underline mb-4 inline-block">
                          ← Back
                        </Link>
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-6">
     
      <h1 className="text-3xl font-bold text-gray-800 mb-8">FlatMate Options</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        
        {/* Add Flatmate Profile */}
        <Link
          to="/flatmate/add"
          className="p-6 bg-white rounded-2xl shadow hover:shadow-lg flex flex-col items-center transition"
        >
          <span className="text-4xl mb-3">👤</span>
          <h2 className="text-xl font-semibold">Add FlatMate Profile</h2>
          <p className="text-gray-600 text-center mt-2">
            Post your details to connect with people searching for a flatmate.
          </p>
        </Link>

        {/* Browse Flatmates */}
        <Link
          to="/flatmates"
          className="p-6 bg-white rounded-2xl shadow hover:shadow-lg flex flex-col items-center transition"
        >
          <span className="text-4xl mb-3">👥</span>
          <h2 className="text-xl font-semibold">Browse FlatMates</h2>
          <p className="text-gray-600 text-center mt-2">
            Find people looking for rooms, flats, or roommates.
          </p>
        </Link>
      </div>
    </div>
    </div>
  );
}
