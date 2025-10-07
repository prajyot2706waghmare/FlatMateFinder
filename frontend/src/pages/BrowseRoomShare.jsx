// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import api from "../services/api";  // ✅ same service

// export default function BrowseRoomShares() {
//   const [shares, setShares] = useState([]);

//   useEffect(() => {
//     api.getRoomShares().then(setShares).catch(console.error);
//   }, []);

//   return (
//     <div>
//       <h2>Available Room Shares</h2>
//       {shares.map((share) => (
//         <div key={share._id}>
//           <h3>{share.title}</h3>
//           <p>{share.location}</p>
//           <p>{share.vacancy} vacancy</p>
//           <p>₹{share.price}</p>
//           <Link to={`/roomshare/${share._id}`}>View Details</Link>
//         </div>
//       ))}
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api"; // ✅ same service

export default function BrowseRoomShares() {
  const [shares, setShares] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .getRoomShares()
      .then((data) => {
        setShares(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
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
// // import React from "react";

// // export default function Hello() {
// //   return <h1>Hello World!</h1>;
// // }

// import React from "react";

// export default function BrowseRoomShares() {
//   return (
//     <div className="p-4">
//       <h1>Browse Room Shares</h1>
//       <p>Here you can explore available room shares.</p>
//     </div>
//   );
// }
