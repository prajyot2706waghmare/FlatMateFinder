import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const { addAdmin } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [err, setErr] = useState("");

  async function submit(e) {
    e.preventDefault();
    try {
      await addAdmin(form);
      navigate("/");
    } catch (error) {
      setErr(error.response?.data?.message || error.message);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        className="w-full max-w-md p-6 bg-white rounded shadow"
        onSubmit={submit}
      >
        <h2 className="text-2xl mb-4">Add New Admin</h2>
        {err && <div className="text-red-600 mb-2">{err}</div>}
        <input
          className="w-full p-2 mb-3"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="w-full p-2 mb-3"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          className="w-full p-2 mb-3"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button className="w-full p-2 bg-indigo-600 text-white rounded">
          Add Admin
        </button>
      </form>
    </div>
  );
}
