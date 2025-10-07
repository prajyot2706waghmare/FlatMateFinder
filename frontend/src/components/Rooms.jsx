import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/search");
        setRooms(res.data);
      } catch (err) {
        console.error("Error fetching rooms:", err);
        setError("Failed to load rooms.");
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  if (loading)
    return <p className="px-10 py-12 text-center text-gray-500">Loading rooms...</p>;

  if (error)
    return <p className="px-10 py-12 text-center text-red-500">{error}</p>;

  if (!rooms.length)
    return <p className="px-10 py-12 text-center text-gray-500">No rooms available.</p>;

  return (
    <section className="px-10 py-12">
      <h3 className="text-2xl font-semibold mb-6">Available Listings</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition"
          >
            <img
              src={room.image || "https://source.unsplash.com/400x250/?apartment"} // fallback image
              alt={room.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h4 className="font-bold text-lg">{room.title}</h4>
              <p className="text-gray-600 mt-2">{room.description}</p>
              <p className="mt-2 font-semibold">{room.property}</p>
              <p className="text-indigo-500 font-bold mt-1">{room.price}</p>
              <button className="mt-3 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
