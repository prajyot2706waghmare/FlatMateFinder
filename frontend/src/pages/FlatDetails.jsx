import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getFlatById } from "../api/userApi";

export default function FlatDetails() {
  const { id } = useParams(); // Get flat id from URL
  const [flat, setFlat] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFlat = async () => {
      try {
        const response = await getFlatById(id);
        setFlat(response.data);
        setLoading(false);
      } catch (err) {
        setError(err,"Failed to fetch flat details.");
        setLoading(false);
      }
    };

    fetchFlat();
  }, [id]);

  if (loading) return <p className="text-center text-gray-500 mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <img
        src={flat.image}
        alt={flat.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <h2 className="text-3xl font-bold mb-2">{flat.title}</h2>
      <p className="text-gray-600 mb-4">{flat.description}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
        <p><strong>Location:</strong> {flat.location}</p>
        <p><strong>Price:</strong> {flat.price}</p>
        <p><strong>Property:</strong> {flat.property}</p>
        <p><strong>Available From:</strong> {new Date(flat.availableFrom).toLocaleDateString()}</p>
        <p><strong>Duration:</strong> {flat.duration}</p>
        <p><strong>Gender Preference:</strong> {flat.genderPreference}</p>
        <p><strong>Age Preference:</strong> {flat.agePreference}</p>
        <p><strong>Sharing Type:</strong> {flat.sharingType}</p>
        <p><strong>Furnishing:</strong> {flat.furnishing}</p>
      </div>

      <div className="mt-4">
        <p><strong>Facilities:</strong> {flat.facilities?.join(", ")}</p>
      </div>

      <Link
        to="/flats"
        className="inline-block mt-6 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
      >
        ← Back to Listings
      </Link>
    </div>
  );
}
