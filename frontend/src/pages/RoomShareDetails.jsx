// // src/pages/RoomShareDetails.jsx
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import api from "../services/api"; // ✅ use your central service

// export default function RoomShareDetails() {
//   const { id } = useParams();
//   const [room, setRoom] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     (async () => {
//       try {
//         setLoading(true);
//         const res = await api.getRoomShareById(id); // ✅ updated
//         setRoom(res);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     })();
//   }, [id]);

//   if (loading) return <p>Loading...</p>;
//   if (!room) return <p>Not found</p>;

//   return (
//     <div style={{ padding: 16, maxWidth: 900, margin: "0 auto" }}>
//       <h2>{room.title}</h2>
//       <p>{room.location} • ₹{room.rent} • {room.vacancy} vacancy</p>
//       <div style={{ display: "flex", gap: 8, overflowX: "auto", margin: "12px 0" }}>
//         {(room.photos || []).map((p, i) => (
//           <img key={i} src={p} alt={`photo-${i}`} style={{ height: 200, objectFit: "cover", borderRadius: 6 }} />
//         ))}
//       </div>
//       <p>{room.description}</p>
//       {/* optionally show contact info / owner if your API exposes it */}
//     </div>
//   );
// }
