import React from "react";

export default function LoginModal() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h3 className="text-xl font-bold mb-4">Login</h3>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 px-4 py-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-3 px-4 py-2 border rounded"
        />
        <button className="w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600">
          Login
        </button>
      </div>
    </div>
  );
}
