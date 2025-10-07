import React from "react";

export default function PostRoomModal() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h3 className="text-xl font-bold mb-4">Post a Room</h3>

        <input
          type="text"
          placeholder="Room Title"
          className="w-full mb-3 px-4 py-2 border rounded"
        />
        <textarea
          placeholder="Room Description"
          className="w-full mb-3 px-4 py-2 border rounded"
        ></textarea>
        <input
          type="number"
          placeholder="Price"
          className="w-full mb-3 px-4 py-2 border rounded"
        />
        <input
          type="text"
          placeholder="Location"
          className="w-full mb-3 px-4 py-2 border rounded"
        />

        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Post Room
        </button>
      </div>
    </div>
  );
}
