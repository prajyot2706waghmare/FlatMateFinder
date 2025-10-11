// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { getShareRooms } from "../api/shareRoomApi"; // ✅ Ensure this matches your API file

// export default function BrowseRoomShares() {
//   const [shares, setShares] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // ✅ Call the correctly imported function
//     console.log("fetching the data")
//     getShareRooms()
//       .then((data) => {
//         setShares(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching room shares:", error);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <p className="text-lg text-gray-600">Loading room shares...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
//         Available Room Shares
//       </h2>

//       {shares.length === 0 ? (
//         <p className="text-center text-gray-500">No room shares available.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {shares.map((share) => (
//             <div
//               key={share._id}
//               className="bg-white shadow-md rounded-2xl p-5 hover:shadow-lg transition"
//             >
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                 {share.title}
//               </h3>
//               <p className="text-gray-600 mb-1">📍 {share.location}</p>
//               <p className="text-gray-600 mb-1">👥 {share.vacancy} Vacancy</p>
//               <p className="text-indigo-600 font-bold text-lg mb-3">
//                 ₹{share.rent} / month
//               </p>

//               {/* <Link
//                 to={`/roomshare/${share._id}`}
//                 className="inline-block w-full text-center bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
//               >
//                 View Details
//               </Link> */}
//             </div>
//           ))}
//         </div>
//       )}
      
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getShareRooms } from "../api/shareRoomApi"; // ✅ Make sure this API file exists

export default function BrowseRoomShares() {
  const [shares, setShares] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("📡 Fetching the data...");

    getShareRooms()
      .then((data) => {
        console.log("✅ Fetched data:", data);
        // Handle both array and object formats safely
        setShares(Array.isArray(data) ? data : data.data || []);
      })
      .catch((error) => {
        console.error("❌ Error fetching room shares:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg text-gray-600">Loading room shares...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
        Available Room Shares
      </h2>

      {shares.length === 0 ? (
        <p className="text-center text-gray-500">No room shares available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {shares.map((share) => (
            <div
              key={share._id}
              className="bg-white shadow-md rounded-2xl p-5 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {share.title}
              </h3>
              <p className="text-gray-600 mb-1">📍 {share.location}</p>
              <p className="text-gray-600 mb-1">👥 {share.vacancy} Vacancy</p>
              <p className="text-indigo-600 font-bold text-lg mb-3">
                ₹{share.rent} / month
              </p>

              <Link
                to={`/roomshare/${share._id}`}
                className="inline-block w-full text-center bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
