// import React from "react";

// export default function Hero() {
//   return (
//     <section className="bg-indigo-50 py-20 text-center">
//       <h2 className="text-4xl font-bold text-gray-800 mb-4">
//         Find Your Perfect FlatMate
//       </h2>
//       <p className="text-gray-600 mb-6">
//         Search rooms, roommates, and flats with ease.
//       </p>
//       <input
//         type="text"
//         placeholder="Enter location..."
//         className="px-4 py-2 w-1/2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//       />
//     </section>
//   );
// }


import React from "react";
import { Link } from "react-router-dom";
import { Home, PlusCircle, Search } from "lucide-react";

export default function Dashboard() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-indigo-50 py-16 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Find Your Perfect FlatMate
        </h2>
        <p className="text-gray-600 mb-6">
          Search rooms, roommates, and flats with ease.
        </p>
        <input
          type="text"
          placeholder="Enter location..."
          className="px-4 py-2 w-1/2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </section>

      {/* Quick Links Section */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-6">
        <Link
          to="/add-flat"
          className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition"
        >
          <PlusCircle className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Add Room / Flat</h3>
          <p className="text-gray-500">List your flat or room for others to find</p>
        </Link>

        <Link
          to="/flats"
          className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition"
        >
          <Search className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Find Flats / Rooms</h3>
          <p className="text-gray-500">Browse available listings easily</p>
        </Link>

        <Link
          to="/flatmate"
          className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition"
        >
          <Home className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">FlateMates</h3>
          <p className="text-gray-500">Go to add flatemates or browse flatemate</p>
        </Link>
      </section>

      {/* Stats Section */}
      <section className="bg-indigo-600 text-white mt-16 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 text-center gap-8">
          <div>
            <h3 className="text-4xl font-bold">120+</h3>
            <p className="text-indigo-200">Active Listings</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">300+</h3>
            <p className="text-indigo-200">Happy Users</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">50+</h3>
            <p className="text-indigo-200">New Rooms This Week</p>
          </div>
        </div>
      </section>
    </div>
  );
}
