
import React, { useState } from "react";
import { X } from "lucide-react";
import { createContactApi } from "../api/api";

export default function ContactPopUp({ isOpen, onClose, room }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    consent: true,
    interestedInLoan: false,
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  if (!isOpen) return null;

  // ✅ Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // ✅ Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const payload = {
        roomId: room?._id,
        name: form.name,
        phone: form.phone,
        email: form.email,
        consent: form.consent,
        interestedInLoan: form.interestedInLoan,
      };

      const resp = await createContactApi(payload);
      console.log("✅ Contact saved:", resp);

      setMessage("Your contact request has been submitted successfully!");
      setForm({
        name: "",
        phone: "",
        email: "",
        consent: true,
        interestedInLoan: false,
      });
    } catch (err) {
      console.error("❌ Error saving contact:", err);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-6 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          <X size={20} />
        </button>

        <div className="mb-4 text-yellow-600 bg-yellow-50 border border-yellow-200 p-2 rounded-md text-sm">
          ⚡ Great choice! Most viewed project in this area
        </div>

        <h2 className="text-xl font-semibold mb-2">Contact Seller</h2>
        <div className="flex items-center mb-4">
          <img
            src="https://via.placeholder.com/40"
            alt="logo"
            className="w-10 h-10 mr-3"
          />
          <div>
            <h3 className="font-medium">{room?.title || "Room Owner"}</h3>
            <p className="text-sm text-gray-500">Developer</p>
            <p className="text-sm text-gray-700">+91 99228.....</p>
          </div>
        </div>

        {/* Contact form */}
        <form className="space-y-3" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Name</label>
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-yellow-300"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Phone</label>
            <div className="flex">
              <span className="bg-gray-100 border border-r-0 rounded-l-lg px-3 flex items-center text-gray-600">
                +91
              </span>
              <input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                className="w-full border rounded-r-lg p-2 focus:outline-none focus:ring focus:ring-yellow-300"
                placeholder="Enter phone number"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-yellow-300"
              placeholder="Enter email address"
              required
            />
          </div>

          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              name="consent"
              checked={form.consent}
              onChange={handleChange}
              className="mt-1"
            />
            <label className="text-sm text-gray-600">
              I agree to be contacted via WhatsApp, SMS, phone, email etc
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="interestedInLoan"
              checked={form.interestedInLoan}
              onChange={handleChange}
            />
            <label className="text-sm text-gray-600">
              I am interested in Home Loans
            </label>
          </div>

          {message && (
            <p className="text-center text-sm text-green-600 mt-2">{message}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 transition"
          >
            {loading ? "Submitting..." : "Get Contact Details"}
          </button>
        </form>
      </div>
    </div>
  );
}
