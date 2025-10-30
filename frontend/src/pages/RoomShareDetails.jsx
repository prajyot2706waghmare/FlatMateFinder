// // import React, { useEffect, useState } from "react";
// // import { useParams, Link } from "react-router-dom";
// // import { getRoomShareById } from "../api/shareRoomApi";
// // import ContactPopup from "./ContactPopUp";

// // export default function RoomShareDetails() {
// //   const { id } = useParams(); // ✅ extract room ID from URL
// //   const [room, setRoom] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //    const [isPopupOpen, setIsPopupOpen] = useState(false);
// //   useEffect(() => {
// //     console.log(" Fetching room details for ID:");

// //     getRoomShareById(id)
// //       .then((responese) => {
// //         console.log("✅ Room details fetched:", responese.data);
// //         setRoom(responese.data);
// //       })
// //       .catch((err) => {
// //         console.error("❌ Error fetching room details:", err);
// //         setError("Failed to load room details");
// //       })
// //       .finally(() => setLoading(false));
// //   }, [id]);

// //   if (loading) {
// //     return (
// //       <div className="flex justify-center items-center min-h-screen">
// //         <p className="text-lg text-gray-600">Loading room details...</p>
// //       </div>
// //     );
// //   }

// //   if (error || !room) {
// //     return (
// //       <div className="flex flex-col justify-center items-center min-h-screen">
// //         <p className="text-red-500 text-lg mb-4">{error || "Room not found"}</p>
// //         <Link
// //           to="/browseroomshare"
// //           className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
// //         >
// //           Back to Listings
// //         </Link>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-gray-100 py-10 px-6">
// //       <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">
// //         <h2 className="text-3xl font-bold text-indigo-600 mb-4">
// //           {room.title}
// //         </h2>
// //         <p className="text-gray-700 mb-2">📍 Location: {room.location}</p>
// //         <p className="text-gray-700 mb-2">👥 Vacancy: {room.vacancy}</p>
// //         <p className="text-gray-700 mb-2">💰 Rent: ₹{room.rent} / month</p>

// //         {room.description && (
// //           <p className="text-gray-600 mt-4">
// //             📝 <strong>Description:</strong> {room.description}
// //           </p>
// //         )}

// //         <div className="mt-6 flex justify-between items-center">
// //           <Link
// //             to="/browseroomshare"
// //             className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
// //           >
// //             ← Back
// //           </Link>
// //           <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition">
// //             Contact Owner
// //           </button>
// //         </div>
// //       </div>
      
// //     </div>
// //   );
// // }



// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { getRoomShareById } from "../api/shareRoomApi";
// import ContactPopUp from "./ContactPopUp";

// export default function RoomShareDetails() {
//   const { id } = useParams();
//   const [room, setRoom] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   useEffect(() => {
//     console.log("Fetching room details for ID:", id);
//     getRoomShareById(id)
//       .then((response) => {
//         console.log("✅ Room details fetched:", response.data);
//         setRoom(response.data);
//       })
//       .catch((err) => {
//         console.error("❌ Error fetching room details:", err);
//         setError("Failed to load room details");
//       })
//       .finally(() => setLoading(false));
//   }, [id]);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <p className="text-lg text-gray-600">Loading room details...</p>
//       </div>
//     );
//   }

//   if (error || !room) {
//     return (
//       <div className="flex flex-col justify-center items-center min-h-screen">
//         <p className="text-red-500 text-lg mb-4">{error || "Room not found"}</p>
//         <Link
//           to="/browseroomshare"
//           className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
//         >
//           Back to Listings
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 py-10 px-6">
//       <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">
//         <h2 className="text-3xl font-bold text-indigo-600 mb-4">
//           {room.title}
//         </h2>
//         <p className="text-gray-700 mb-2">📍 Location: {room.location}</p>
//         <p className="text-gray-700 mb-2">👥 Vacancy: {room.vacancy}</p>
//         <p className="text-gray-700 mb-2">💰 Rent: ₹{room.rent} / month</p>

//         {room.description && (
//           <p className="text-gray-600 mt-4">
//             📝 <strong>Description:</strong> {room.description}
//           </p>
//         )}

//         <div className="mt-6 flex justify-between items-center">
//           <Link
//             to="/browseroomshare"
//             className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
//           >
//             ← Back
//           </Link>
//           <button
//             onClick={() => setIsPopupOpen(true)}
//             className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
//           >
//             Contact Owner
//           </button>
//         </div>
//       </div>

//       {/* Popup Modal */}
//       <ContactPopUp
//         isOpen={isPopupOpen}
//         onClose={() => setIsPopupOpen(false)}
//       />
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getRoomShareById } from "../api/shareRoomApi";
import ContactPopUp from "./RoomShareContactPopUp";

export default function RoomShareDetails() {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    console.log("Fetching room details for ID:", id);
    getRoomShareById(id)
      .then((response) => {
        console.log("✅ Room details fetched:", response.data);
        setRoom(response.data);
      })
      .catch((err) => {
        console.error("❌ Error fetching room details:", err);
        setError("Failed to load room details");
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg text-gray-600">Loading room details...</p>
      </div>
    );
  }

  if (error || !room) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen">
        <p className="text-red-500 text-lg mb-4">{error || "Room not found"}</p>
        <Link
          to="/browseroomshare"
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Back to Listings
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-indigo-600 mb-4">
          {room.title}
        </h2>
        <p className="text-gray-700 mb-2">📍 Location: {room.location}</p>
        <p className="text-gray-700 mb-2">👥 Vacancy: {room.vacancy}</p>
        <p className="text-gray-700 mb-2">💰 Rent: ₹{room.rent} / month</p>

        {room.description && (
          <p className="text-gray-600 mt-4">
            📝 <strong>Description:</strong> {room.description}
          </p>
        )}

        <div className="mt-6 flex justify-between items-center">
          <Link
            to="/browseroomshare"
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
          >
            ← Back
          </Link>
          <button
            onClick={() => setIsPopupOpen(true)}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Contact Owner
          </button>
        </div>
      </div>

      {/* ✅ Pass room object to popup */}
      <ContactPopUp
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        room={room}
      />
    </div>
  );
}
