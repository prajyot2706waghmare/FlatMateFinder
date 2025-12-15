// /* ===================================================================
// File: src/pages/Profile.jsx
// Admin profile view + edit
// =================================================================== */
// import React, { useState, useEffect } from "react";
// import { getAdminProfile, updateAdminProfile } from "../api/adminApi";
// import { useAuth } from "../context/AuthContext";

// export default function Profile() {
//   const { user, setUser } = useAuth();
//   const [form, setForm] = useState({ name: "", email: "" });
//   useEffect(() => {
//     if (user) setForm({ name: user.name, email: user.email });
//   }, [user]);

//   async function submit(e) {
//     e.preventDefault();
//     const updated = await updateAdminProfile(form);
//     setUser(updated);
//     alert("Saved");
//   }

//   return (
//     <div className="p-6 max-w-lg">
//       <h2 className="text-xl mb-4">Profile</h2>
//       <form onSubmit={submit} className="space-y-3">
//         <input
//           placeholder="Name"
//           value={form.name}
//           onChange={(e) => setForm({ ...form, name: e.target.value })}
//           className="w-full p-2 border"
//         />
//         <input
//           placeholder="Email"
//           value={form.email}
//           onChange={(e) => setForm({ ...form, email: e.target.value })}
//           className="w-full p-2 border"
//         />
//         <button className="bg-indigo-600 text-white px-3 py-1 rounded">
//           Save
//         </button>
//       </form>
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateAdminProfile } from '../api/adminApi';
import { useAuth } from '../context/AuthContext';

export default function Profile() {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: '', email: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (user) {
      setForm({ name: user.name || '', email: user.email || '' });
    }
  }, [user]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
    setSuccess('');
  };

  const validate = () => {
    if (!form.name.trim()) return 'Name is required';
    if (!form.email.trim()) return 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'Invalid email format';
    return null;
  };

  const submit = async (e) => {
    e.preventDefault();

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setLoading(true);
      const updated = await updateAdminProfile(form);
      setUser(updated);
      setSuccess('Profile updated successfully');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Admin Profile</h2>
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="text-sm px-3 py-1 border rounded hover:bg-gray-100"
        >
          Back
        </button>
      </div>

      <form onSubmit={submit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-indigo-500"
          />
        </div>

        {error && <p className="text-red-600 text-sm">{error}</p>}
        {success && <p className="text-green-600 text-sm">{success}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded disabled:opacity-50"
        >
          {loading ? 'Saving...' : 'Save Changes'}
        </button>
      </form>
    </div>
  );
}
