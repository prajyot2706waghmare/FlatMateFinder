import React, { useState } from "react";
import api from "../services/api"; // ✅ import the central api

const SearchBar = () => {
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("flat");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await api.search({ category, location }); // ✅ use api.js search
      setResults(data);
    } catch (error) {
      console.error("Search failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="flex gap-2">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="flat">Find Flat</option>
          <option value="flatmate">Find Flatmate</option>
          <option value="pg">Find PG</option>
        </select>

        <input
          type="text"
          placeholder="Enter location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 border rounded"
        />

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {/* Results */}
      <div className="mt-4">
        {results.length > 0 ? (
          <ul>
            {results.map((item) => (
              <li key={item._id} className="p-2 border-b">
                <strong>{item.title}</strong> — {item.location} ({item.category})
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No results found</p>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
