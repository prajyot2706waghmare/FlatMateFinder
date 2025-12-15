/* ===================================================================
File: src/pages/Flats.jsx
List + create/edit links
=================================================================== */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { listFlats, deleteFlat } from "../api/adminApi";
import { useNavigate } from 'react-router-dom';

export default function Flats() {
  const [flats, setFlats] = useState([]);
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  async function load() {
    try {
      const data = await listFlats();
      console.log("This is flat data", data);
      setFlats(data);
    } catch (e) {
      setErr(e.message);
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function handleDelete(id) {
    if (!window.confirm("Delete this flat?")) return;
    await deleteFlat(id);
    load();
  }

  return (
    <div className="p-6">
      <header className="flex justify-between items-center mb-4">
        <h2 className="text-xl">Flats</h2>
        <Link
          to="/flats/new"
          className="bg-green-600 text-white px-3 py-1 rounded"
        >
          Add Flat
        </Link>
         <button
          type="button"
           onClick={() => navigate('/')}
          className="text-sm px-3 py-1 border rounded hover:bg-gray-100"
        >
          Back
        </button>
      </header>
      {err && <div className="text-red-600">{err}</div>}
      <div className="space-y-3">
        {flats.map((f) => (
          <div
            key={f._id}
            className="p-3 border rounded flex justify-between items-center"
          >
            <div>
              <div className="font-semibold">{f.title || f.address}</div>
              <div className="text-sm">
                {f.city} • {f.price}
              </div>
            </div>
            <div className="space-x-2">
              <Link
                to={`/flats/${f._id}/edit`}
                className="px-2 py-1 border rounded"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(f._id)}
                className="px-2 py-1 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
