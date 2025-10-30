import React from 'react'
import { Link } from 'react-router-dom'
import { Home, PlusCircle, Search } from "lucide-react";

function RoomShareHome() {
  return (
    <div>
      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-6">
    <div>Find or rent flat to others</div>
     
         <Link
          to="/roomshare"
          className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition"
        >
          <PlusCircle className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Share room</h3>
          <p className="text-gray-500">Share room if you want hire room mate</p>
        </Link>

        <Link
          to="/browseroomshare"
          className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition"
        >
          <Search className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Find Flats / Rooms</h3>
          <p className="text-gray-500">Select room which you want </p>
        </Link>
        </section>
    </div>
  )
}

 export default RoomShareHome

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Home, PlusCircle, Search, Phone } from "lucide-react";
// import ContactPopup from "../components/ContactPopup";

// function RoomShareHome() {
//   const [isPopupOpen, setPopupOpen] = useState(false);

//   const handleContactSubmit = (data) => {
//     console.log("Contact form submitted:", data);
//     alert("Your request has been sent successfully!");
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-10">
//       <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
//         {/* Intro card */}
//         <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col justify-center text-center hover:shadow-lg transition">
//           <h2 className="text-2xl font-semibold text-indigo-600 mb-2">
//             Find or Rent Flats Easily 🏠
//           </h2>
//           <p className="text-gray-500 mb-4">
//             Whether you’re looking for a flatmate or sharing your room — we make it simple.
//           </p>
//           <button
//             onClick={() => setPopupOpen(true)}
//             className="flex items-center justify-center bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition mx-auto"
//           >
//             <Phone className="w-5 h-5 mr-2" />
//             Contact Owner / Seller
//           </button>
//         </div>

//         {/* Share Room */}
//         <Link
//           to="/roomshare"
//           className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition"
//         >
//           <PlusCircle className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
//           <h3 className="text-xl font-semibold mb-2">Share Room</h3>
//           <p className="text-gray-500">List your room to find a flatmate</p>
//         </Link>

//         {/* Find Room */}
//         <Link
//           to="/browseroomshare"
//           className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition"
//         >
//           <Search className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
//           <h3 className="text-xl font-semibold mb-2">Find Flats / Rooms</h3>
//           <p className="text-gray-500">Browse available flats and rooms near you</p>
//         </Link>
//       </section>

//       {/* Contact Popup */}
//       <ContactPopup
//         isOpen={isPopupOpen}
//         onClose={() => setPopupOpen(false)}
//         onSubmit={handleContactSubmit}
//         ownerName="Property Owner / Seller"
//       />
//     </div>
//   );
// }

// export default RoomShareHome;
