// import React, { useState } from "react";
// import api from "../services/api";  // ✅ point to your ApiService

// export default function AddRoomShare() {
//   const [form, setForm] = useState({ title: "", location: "", vacancy: "", price: "" });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await api.createRoomShare(form);  // ✅ use new method
//       alert("Room share added successfully!");
//     } catch (err) {
//       console.error(err);
//       alert("Error adding room share");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input placeholder="Title" onChange={(e) => setForm({ ...form, title: e.target.value })} />
//       <input placeholder="Location" onChange={(e) => setForm({ ...form, location: e.target.value })} />
//       <input placeholder="Vacancy" onChange={(e) => setForm({ ...form, vacancy: e.target.value })} />
//       <input placeholder="Price" onChange={(e) => setForm({ ...form, price: e.target.value })} />
//       <button type="submit">Add Room Share</button>
//     </form>
//   );
// }
import React, { useState } from "react";
import api from "../services/api"; // ✅ Your API service

export default function AddRoomShare() {
  const [form, setForm] = useState({
    title: "",
    location: "",
    vacancy: "",
    price: "",
    description: "",
    contact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.createRoomShare(form);
      alert("✅ Room share added successfully!");
      setForm({
        title: "",
        location: "",
        vacancy: "",
        price: "",
        description: "",
        contact: "",
      });
    } catch (err) {
      console.error(err);
      alert("❌ Error adding room share");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-2xl p-8 w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-indigo-600">
          Add Room Share
        </h2>

        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title (e.g. 2 BHK Flat)"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          required
        />

        <input
          type="text"
          name="location"
          value={form.location}
          onChange={handleChange}
          placeholder="Location"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          required
        />

        <input
          type="number"
          name="vacancy"
          value={form.vacancy}
          onChange={handleChange}
          placeholder="Vacancy (No. of beds available)"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          required
        />

        <input
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Price (per month)"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          required
        />

        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description (Amenities, rules, etc.)"
          rows="3"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
        ></textarea>

        <input
          type="text"
          name="contact"
          value={form.contact}
          onChange={handleChange}
          placeholder="Contact Number"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          required
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200"
        >
          Add Room Share
        </button>
      </form>
    </div>
  );
}
