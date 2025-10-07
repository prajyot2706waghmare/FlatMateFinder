// // src/pages/FlatmateDetails.jsx
// import React, { useEffect, useState } from "react";
// import { getFlatmateById } from "../api/flatmateApi";
// import { useParams, Link } from "react-router-dom";

// export default function FlatmateDetails() {
//   const { id } = useParams();
//   const [mate, setMate] = useState(null);

//   useEffect(() => {
//     console.log("Fetching flatmate with ID:", id);
//     setMate(id)
//     getFlatmateById(id).then(setMate).catch(console.error);
//   }, [id]);

//   if (!mate) return <div className="p-6">Loading...</div>;

//   return (
//     <main className="max-w-3xl mx-auto p-6">
//       <Link to="/flatmates" className="text-blue-600 underline mb-4 inline-block">← Back</Link>
//       <h1 className="text-2xl font-bold">{mate.name}</h1>
//       <p className="text-sm text-gray-600">{mate.location}</p>
//       <p className="mt-2">Age: {mate.age}</p>
//       <p>Gender: {mate.gender}</p>
//       <p>Occupation: {mate.occupation}</p>
//       <p>Budget: ₹{mate.budget}</p>
//       <p>Preferences: {Array.isArray(mate.preferences) ? mate.preferences.join(", ") : mate.preferences}</p>
//       <p className="mt-3">Contact: {mate.contact}</p>
//       {mate.image && <img src={mate.image} alt={mate.name} className="mt-4 w-full rounded" />}
//     </main>
//   );
// }


// src/pages/FlatmateDetails.jsx
import React, { useEffect, useState } from "react";
import { getFlatmateById } from "../api/flatmateApi";
import { useParams, Link } from "react-router-dom";

export default function FlatmateDetails() {
  const { id } = useParams();
  const [mate, setMate] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Fetching flatmate with ID:", id);
    getFlatmateById(id)
      .then((data) => {
        setMate(data);
        console.log("Flatmate data:", mate);
      })
      .catch((err) => {
        console.error("Error fetching flatmate:", err);
        setError("Could not load flatmate details.");
      });
  }, [id]);

  if (error) return <div className="p-6 text-red-600">{error}</div>;
  if (!mate) return <div className="p-6">Loading...</div>;

  return (
    <main className="max-w-3xl mx-auto p-6">
      <Link to="/flatmates" className="text-blue-600 underline mb-4 inline-block">
        ← Back
      </Link>
      <h1 className="text-2xl font-bold">{mate.name}</h1>
       <p className="text-sm text-gray-600">{mate.location}</p>
      <p className="mt-2">Age: {mate.age}</p>
      <p>Gender: {mate.gender}</p>
      <p>Occupation: {mate.occupation}</p>
    <p>Budget: ₹{mate.budget}</p>


    <p>
  Preferences:{" "}
  {Array.isArray(mate.preferences)
    ? mate.preferences.join(", ")
    : mate.preferences}
</p>

<p className="mt-3">
  Contact: 
  <br />Email: {mate.contact?.email} 
  <br />Phone: {mate.contact?.phone}
</p>
      {mate.image && (
        <img src={mate.image} alt={mate.name} className="mt-4 w-full rounded" />
      )}
    </main>
  );
}
