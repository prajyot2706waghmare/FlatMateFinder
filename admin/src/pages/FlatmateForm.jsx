/* ===================================================================
File: src/pages/FlatmateForm.jsx
=================================================================== */
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createFlatmate, getFlatmate, updateFlatmate } from "../api/adminApi";

export default function FlatmateForm({ edit }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "Any",
    location: "",
    budget: "",
  });

  useEffect(() => {
    if (edit && id)
      (async () => {
        setForm(await getFlatmate(id));
      })();
  }, [edit, id]);

  async function submit(e) {
    e.preventDefault();
    if (edit) await updateFlatmate(id, form);
    else await createFlatmate(form);
    navigate("/flatmates");
  }

  return (
    <div className="p-6">
      <h2 className="text-xl mb-4">
        {edit ? "Edit Flatmate" : "Add Flatmate"}
      </h2>
      <form onSubmit={submit} className="max-w-lg space-y-3">
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full p-2 border"
        />
        <input
          placeholder="Age"
          value={form.age}
          onChange={(e) => setForm({ ...form, age: e.target.value })}
          className="w-full p-2 border"
        />
        <select
          value={form.gender}
          onChange={(e) => setForm({ ...form, gender: e.target.value })}
          className="w-full p-2 border"
        >
          <option>Any</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        <input
          placeholder="Location"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
          className="w-full p-2 border"
        />
        <input
          placeholder="Budget"
          value={form.budget}
          onChange={(e) => setForm({ ...form, budget: e.target.value })}
          className="w-full p-2 border"
        />
        <button className="bg-indigo-600 text-white px-3 py-1 rounded">
          Save
        </button>
      </form>
    </div>
  );
}
