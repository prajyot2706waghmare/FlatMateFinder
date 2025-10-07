// src/pages/BrowseFlatmates.jsx
import React, { useEffect, useState } from "react";
import { getFlatmates } from "../api/flatmateApi";
import { Link } from "react-router-dom";
export default function BrowseFlatmates() {
  const [mates, setMates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFlatmates()
      .then(data => setMates(data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="p-6">Loading...</div>;

  return (
    <main className="max-w-6xl mx-auto p-6">
      <Link to="/flatmate" className="text-blue-600 underline mb-4 inline-block">
                    ← Back
                  </Link>
      <h1 className="text-2xl font-bold mb-4">Available Flatmates</h1>
      {mates.length === 0 ? (
        <p>No flatmates yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mates.map(m => (
            <Link to={`/flatmates/${m._id}`} key={m._id} className="block p-4 bg-white border rounded hover:shadow">
              <h2 className="font-semibold">{m.name}</h2>
              <p className="text-sm text-gray-600">{m.location} • {m.occupation || "—"}</p>
              <p className="mt-2">Budget: ₹{m.budget || "—"}</p>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
//src/pages/BrowseFlatmates.jsx
// import React, { useEffect, useState } from "react";
// import { getFlatmates } from "../api/flatmateApi";
// import { Link } from "react-router-dom";

// export default function BrowseFlatmates() {
//   const [mates, setMates] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const res = await getFlatmates();

//         // ✅ ensure every mate has an _id (fallback to index)
//         const data = (res.data || []).map((m, idx) => ({
//           _id: m._id || idx, // add id if missing
//           ...m,
//         }));

//         setMates(data);
//       } catch (err) {
//         console.error("Error fetching flatmates:", err);
//         setMates([]);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchData();
//   }, []);

//   if (loading) return <div className="p-6">Loading...</div>;

//   return (
//     <main className="max-w-6xl mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-4">Available Flatmates</h1>

//       {mates.length === 0 ? (
//         <p>No flatmates yet.</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {mates.map((m) => (
//             <Link
//               to={`/flatmates/${m._id}`}   // ✅ now always has _id
//               key={m._id}
//               className="block p-4 bg-white border rounded hover:shadow"
//             >
//               <h2 className="font-semibold text-lg">{m.name || "Unknown"}</h2>
//               <p className="text-sm text-gray-600">
//                 {m.location?.city || "—"}, {m.location?.state || "—"} •{" "}
//                 {m.occupation || "—"}
//               </p>
//               <p className="mt-2">Budget: ₹{m.budget || "—"}</p>
//               {m.preferences?.length > 0 && (
//                 <p className="mt-1 text-sm text-gray-500">
//                   Preferences: {m.preferences.join(", ")}
//                 </p>
//               )}
//               {m.contact?.email && (
//                 <p className="mt-1 text-xs text-gray-400">📧 {m.contact.email}</p>
//               )}
//             </Link>
//           ))}
//         </div>
//       )}
//     </main>
//   );
// }
// src/pages/BrowseFlatmates.jsx
// // 
// import React, { useEffect, useState } from "react";
// import { getFlatmates } from "../api/flatmateApi";
// import { Link } from "react-router-dom";

// export default function BrowseFlatmates() {
//   const [mates, setMates] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const res = await getFlatmates();

//         // ✅ normalize data: add _id if missing
//         const data = (res.data || []).map((m, idx) => ({
//           _id: m._id || idx.toString(),
//           ...m,
//         }));

//         setMates(data);
//       } catch (err) {
//         console.error("Error fetching flatmates:", err);
//         setMates([]);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchData();
//   }, []);

//   if (loading) {
//     return <div className="p-6">Loading...</div>;
//   }

//   return (
//     <main className="max-w-6xl mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-4">Available Flatmates</h1>

//       {mates.length === 0 ? (
//         <p>No flatmates yet.</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {mates.map((m) => (
//             <Link
//               to={`/flatmates/${m._id}`}
//               key={m._id}
//               className="block p-4 bg-white border rounded hover:shadow"
//             >
//               <h2 className="font-semibold text-lg">{m.name || "Unknown"}</h2>
//               <p className="text-sm text-gray-600">
//                 {m.location?.city || "—"}, {m.location?.state || "—"} •{" "}
//                 {m.occupation || "—"}
//               </p>
//               <p className="mt-2">Budget: ₹{m.budget || "—"}</p>
//             </Link>
//           ))}
//         </div>
//       )}
//     </main>
//   );
// }
