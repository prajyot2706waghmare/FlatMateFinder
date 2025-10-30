// // // src/pages/FlatmateDetails.jsx
// // import React, { useEffect, useState } from "react";
// // import { getFlatmateById } from "../api/flatmateApi";
// // import { useParams, Link } from "react-router-dom";

// // export default function FlatmateDetails() {
// //   const { id } = useParams();
// //   const [mate, setMate] = useState(null);

// //   useEffect(() => {
// //     console.log("Fetching flatmate with ID:", id);
// //     setMate(id)
// //     getFlatmateById(id).then(setMate).catch(console.error);
// //   }, [id]);

// //   if (!mate) return <div className="p-6">Loading...</div>;

// //   return (
// //     <main className="max-w-3xl mx-auto p-6">
// //       <Link to="/flatmates" className="text-blue-600 underline mb-4 inline-block">← Back</Link>
// //       <h1 className="text-2xl font-bold">{mate.name}</h1>
// //       <p className="text-sm text-gray-600">{mate.location}</p>
// //       <p className="mt-2">Age: {mate.age}</p>
// //       <p>Gender: {mate.gender}</p>
// //       <p>Occupation: {mate.occupation}</p>
// //       <p>Budget: ₹{mate.budget}</p>
// //       <p>Preferences: {Array.isArray(mate.preferences) ? mate.preferences.join(", ") : mate.preferences}</p>
// //       <p className="mt-3">Contact: {mate.contact}</p>
// //       {mate.image && <img src={mate.image} alt={mate.name} className="mt-4 w-full rounded" />}
// //     </main>
// //   );
// // }


// // src/pages/FlatmateDetails.jsx
// import React, { useEffect, useState } from "react";
// import { getFlatmateById } from "../api/flatmateApi";
// import { useParams, Link } from "react-router-dom";

// export default function FlatmateDetails() {
//   const { id } = useParams();
//   const [mate, setMate] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     console.log("Fetching flatmate with ID:", id);
//     getFlatmateById(id)
//       .then((data) => {
//         setMate(data);
//         console.log("Flatmate data:", mate);
//       })
//       .catch((err) => {
//         console.error("Error fetching flatmate:", err);
//         setError("Could not load flatmate details.");
//       });
//   }, [id]);

//   if (error) return <div className="p-6 text-red-600">{error}</div>;
//   if (!mate) return <div className="p-6">Loading...</div>;

//   return (
//     <main className="max-w-3xl mx-auto p-6">
//       <Link to="/flatmates" className="text-blue-600 underline mb-4 inline-block">
//         ← Back
//       </Link>
//       <h1 className="text-2xl font-bold">{mate.name}</h1>
//        <p className="text-sm text-gray-600">{mate.location}</p>
//       <p className="mt-2">Age: {mate.age}</p>
//       <p>Gender: {mate.gender}</p>
//       <p>Occupation: {mate.occupation}</p>
//     <p>Budget: ₹{mate.budget}</p>


//     <p>
//   Preferences:{" "}
//   {Array.isArray(mate.preferences)
//     ? mate.preferences.join(", ")
//     : mate.preferences}
// </p>

// <p className="mt-3">
//   Contact: 
//   <br />Email: {mate.contact?.email} 
//   <br />Phone: {mate.contact?.phone}
// </p>
//       {mate.image && (
//         <img src={mate.image} alt={mate.name} className="mt-4 w-full rounded" />
//       )}
//     </main>
//   );
// }


// src/pages/FlatmateDetails.jsx
import React, { useEffect, useState } from "react";
import { getFlatmateById } from "../api/flatmateapi";
import { useParams, Link } from "react-router-dom";
import ContactPopUp from "./FlatMateContactPopUp"; // ✅ New popup component

export default function FlatmateDetails() {
  const { id } = useParams();
  const [mate, setMate] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // ✅ For modal open/close

  useEffect(() => {
    console.log("Fetching flatmate with ID:", id);
    getFlatmateById(id)
      .then((data) => {
        setMate(data);
        console.log("✅ Flatmate data:", data);
      })
      .catch((err) => {
        console.error("❌ Error fetching flatmate:", err);
        setError("Could not load flatmate details.");
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-600 text-lg">Loading flatmate details...</p>
      </div>
    );

  if (error || !mate)
    return (
      <div className="flex flex-col justify-center items-center min-h-screen">
        <p className="text-red-500 text-lg mb-4">
          {error || "Flatmate not found"}
        </p>
        <Link
          to="/flatmates"
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Back to Listings
        </Link>
      </div>
    );

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <Link
          to="/flatmates"
          className="text-indigo-600 hover:underline mb-4 inline-block"
        >
          ← Back
        </Link>

        <div className="flex flex-col sm:flex-row gap-6">
          {mate.image && (
            <img
              src={mate.image}
              alt={mate.name}
              className="w-full sm:w-1/3 h-48 object-cover rounded-lg"
            />
          )}

          <div>
            <h1 className="text-3xl font-bold text-indigo-600">{mate.name}</h1>
            <p className="text-sm text-gray-600">{mate.location}</p>
            <p className="mt-2 text-gray-700">🎂 Age: {mate.age}</p>
            <p className="text-gray-700">🚻 Gender: {mate.gender}</p>
            <p className="text-gray-700">💼 Occupation: {mate.occupation}</p>
            <p className="text-gray-700">💰 Budget: ₹{mate.budget}</p>

            <p className="mt-2 text-gray-700">
              💭 Preferences:{" "}
              {Array.isArray(mate.preferences)
                ? mate.preferences.join(", ")
                : mate.preferences}
            </p>
          </div>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <Link
            to="/flatmates"
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
          >
            ← Back
          </Link>

          {/* ✅ Contact Button */}
          <button
            onClick={() => setIsPopupOpen(true)}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Contact Flatmate
          </button>
        </div>
      </div>

      {/* ✅ Popup Modal */}
      <ContactPopUp
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        mate={mate} // pass flatmate info
      />
    </main>
  );
}
