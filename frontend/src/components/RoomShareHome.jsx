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
