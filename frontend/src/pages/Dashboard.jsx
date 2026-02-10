// // import React from "react";
// // import { Link } from "react-router-dom";

// // export default function Dashboard() {
// //   return (
// //     <section className="bg-gray-50 min-h-screen py-12 px-6">
// //       <h1 className="text-4xl font-bold text-indigo-600 text-center mb-8">
// //         Welcome to Your Dashboard
// //       </h1>

// //       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
// //         {/* Add Flat */}
// //         <Link
// //           to="/post-room"
// //           className="p-6 bg-white shadow-md rounded-2xl hover:shadow-lg transition"
// //         >
// //           <h2 className="text-xl font-semibold text-gray-800 mb-2">➕ Post a Flat</h2>
// //           <p className="text-gray-600">Add your flat or room for others to find.</p>
// //         </Link>

// //         {/* Find Flats */}
// //         <Link
// //           to="/flats"
// //           className="p-6 bg-white shadow-md rounded-2xl hover:shadow-lg transition"
// //         >
// //           <h2 className="text-xl font-semibold text-gray-800 mb-2">🏠 Find Flats</h2>
// //           <p className="text-gray-600">Browse available flats and rooms.</p>
// //         </Link>

// //         {/* Find Flatmates */}
// //         <Link
// //           to="/flatmates"
// //           className="p-6 bg-white shadow-md rounded-2xl hover:shadow-lg transition"
// //         >
// //           <h2 className="text-xl font-semibold text-gray-800 mb-2">👥 Find Flatmates</h2>
// //           <p className="text-gray-600">Search for roommates that match your preferences.</p>
// //         </Link>

// //         {/* Profile */}
// //         <Link
// //           to="/profile"
// //           className="p-6 bg-white shadow-md rounded-2xl hover:shadow-lg transition"
// //         >
// //           <h2 className="text-xl font-semibold text-gray-800 mb-2">🙍 Profile</h2>
// //           <p className="text-gray-600">View and update your profile details.</p>
// //         </Link>
// //       </div>
// //     </section>
// //   );
// // }
// <Link to="/findFlatmates" className="p-6 bg-white rounded shadow flex flex-col items-center">
//   <span className="text-4xl">👥</span>
//   <h3 className="font-semibold mt-2">Find Flatmates</h3>
//   <p className="text-sm text-gray-500">Browse people looking for roommates</p>
// </Link>
import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
function Dashboard() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  )
}

export default Dashboard
