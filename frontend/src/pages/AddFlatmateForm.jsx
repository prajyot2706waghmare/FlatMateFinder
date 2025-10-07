// // src/pages/AddFlatmateForm.jsx
// import React, { useState } from "react";
// import { addFlatmate } from "../api/flatmateApi";
// import { useNavigate } from "react-router-dom";

// export default function AddFlatmateForm() {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({
//     name: "",
//     age: "",
//     gender: "Any",
//     location: "",
//     budget: "",
//     occupation: "",
//     preferences: "",
//     contact: "",
//     image: "" // optional URL
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   function change(e) {
//     setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   }

//   async function submit(e) {
//     e.preventDefault();
//     setError("");
//     setLoading(true);
//     try {
//       const payload = {
//         ...form,
//         age: form.age ? Number(form.age) : undefined,
//         budget: form.budget ? Number(form.budget) : undefined,
//         preferences: form.preferences ? form.preferences.split(",").map(s => s.trim()) : [],
//       };
//       await addFlatmate(payload);
//       setLoading(false);
//       navigate("/flatmates");
//     } catch (err) {
//       setLoading(false);
//       setError(err.message || "Failed to submit");
//     }
//   }

//   return (
//     <main className="max-w-2xl mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-4">Add Flatmate Profile</h1>
//       {error && <div className="text-red-600 mb-4">{error}</div>}
//       <form onSubmit={submit} className="space-y-3">
//         <input name="name" value={form.name} onChange={change} required placeholder="Full name" className="w-full p-3 border rounded" />
//         {/* <input name="age" value={form.age} onChange={change} placeholder="Age" className="w-full p-3 border rounded" />
//         <select name="gender" value={form.gender} onChange={change} className="w-full p-3 border rounded">
//           <option>Any</option>
//           <option>Male</option>
//           <option>Female</option>
//           <option>Family</option>
//         </select>
//         <input name="location" value={form.location} onChange={change} placeholder="Location (city, area)" className="w-full p-3 border rounded" />
//         <input name="budget" value={form.budget} onChange={change} placeholder="Budget (₹)" className="w-full p-3 border rounded" />
//         <input name="occupation" value={form.occupation} onChange={change} placeholder="Occupation (student/employee/etc.)" className="w-full p-3 border rounded" />
//         <input name="preferences" value={form.preferences} onChange={change} placeholder="Preferences (comma separated)" className="w-full p-3 border rounded" />
//         <input name="contact" value={form.contact} onChange={change} placeholder="Contact (phone/email)" className="w-full p-3 border rounded" />
//         <input name="image" value={form.image} onChange={change} placeholder="Image URL (optional)" className="w-full p-3 border rounded" /> */}
//         <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white p-3 rounded">
//           {loading ? "Publishing..." : "Publish Profile"}
//         </button>
//       </form>
//     </main>
//   );
// }

// src/pages/AddFlatmateForm.jsx
import React, { useState } from "react";
import { addFlatmate } from "../api/flatmateApi";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export default function AddFlatmateForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "Any",
    location: "",
    budget: "",
    occupation: "",
    preferences: "",
    email: "",
    phone: "",
    image: "",

    // New fields
    duration: "MONTHLY",
    property: "",
    furnishing: "",
    genderPreference: "Any",
    agePreference: "",
    availableFrom: "",
    facilities: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function change(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function submit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const payload = {
        ...form,
        age: form.age ? Number(form.age) : undefined,
        budget: form.budget ? Number(form.budget) : undefined,
        preferences: form.preferences
          ? form.preferences.split(",").map(s => s.trim())
          : [],
        facilities: form.facilities
          ? form.facilities.split(",").map(s => s.trim())
          : [],
        availableFrom: form.availableFrom ? new Date(form.availableFrom) : undefined,
        contact: {
          email: form.email || undefined,
          phone: form.phone || undefined,
        },
      };

      // remove flat fields (email, phone, preferences string, facilities string)
      delete payload.email;
      delete payload.phone;
      delete payload.preferences;
      delete payload.facilities;

      await addFlatmate(payload);
      setLoading(false);
      navigate("/flatmates");
    } catch (err) {
      setLoading(false);
      setError(err.message || "Failed to submit");
    }
  }

  return (
    <main className="max-w-2xl mx-auto p-6">
      <Link to="/flatmate" className="text-blue-600 underline mb-4 inline-block">
              ← Back
            </Link>
      <h1 className="text-2xl font-bold mb-4">Add Flatmate Profile</h1>
      {error && <div className="text-red-600 mb-4">{error}</div>}
      <form onSubmit={submit} className="space-y-3">
        {/* Basic Info */}
        <input name="name" value={form.name} onChange={change} required placeholder="Full name" className="w-full p-3 border rounded" />
        <input name="age" value={form.age} onChange={change} placeholder="Age" className="w-full p-3 border rounded" />
        <select name="gender" value={form.gender} onChange={change} className="w-full p-3 border rounded">
          <option>Any</option>
          <option>Male</option>
          <option>Female</option>
          <option>Family</option>
        </select>
        <input name="location" value={form.location} onChange={change} required placeholder="Location (city, area)" className="w-full p-3 border rounded" />
        <input name="budget" value={form.budget} onChange={change} required placeholder="Budget (₹)" className="w-full p-3 border rounded" />
        <input name="occupation" value={form.occupation} onChange={change} placeholder="Occupation (student/employee/etc.)" className="w-full p-3 border rounded" />

        {/* Preferences & Contact */}
        <input name="preferences" value={form.preferences} onChange={change} placeholder="Preferences (comma separated)" className="w-full p-3 border rounded" />
        <input name="email" value={form.email} onChange={change} placeholder="Email" className="w-full p-3 border rounded" />
        <input name="phone" value={form.phone} onChange={change} placeholder="Phone number" className="w-full p-3 border rounded" />

        {/* New Fields */}
        <select name="duration" value={form.duration} onChange={change} className="w-full p-3 border rounded">
          <option value="MONTHLY">Monthly</option>
          <option value="YEARLY">Yearly</option>
          <option value="DAILY">Daily</option>
        </select>
        <input name="property" value={form.property} onChange={change} placeholder="Property type (e.g. 2BHK, PG, Shared room)" className="w-full p-3 border rounded" />
        <input name="furnishing" value={form.furnishing} onChange={change} placeholder="Furnishing (Furnished/Semi/Unfurnished)" className="w-full p-3 border rounded" />
        <select name="genderPreference" value={form.genderPreference} onChange={change} className="w-full p-3 border rounded">
          <option>Any</option>
          <option>Male</option>
          <option>Female</option>
          <option>Family</option>
        </select>
        <input name="agePreference" value={form.agePreference} onChange={change} placeholder="Age Preference (e.g. 20-30)" className="w-full p-3 border rounded" />
        <input type="date" name="availableFrom" value={form.availableFrom} onChange={change} className="w-full p-3 border rounded" />
        <input name="facilities" value={form.facilities} onChange={change} placeholder="Facilities (comma separated)" className="w-full p-3 border rounded" />

        <input name="image" value={form.image} onChange={change} placeholder="Image URL (optional)" className="w-full p-3 border rounded" />

        {/* Submit */}
        <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white p-3 rounded">
          {loading ? "Publishing..." : "Publish Profile"}
        </button>
      </form>
    </main>
  );
}
