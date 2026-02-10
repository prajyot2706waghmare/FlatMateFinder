import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerUser } from "../api/userApi";

export default function EmailVerification() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { formData } = state;

  const [otp, setOtp] = useState("");

  const verifyOTP = async () => {
    const res = await fetch("http://localhost:5000/api/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: formData.email, otp }),
    });

    if (!res.ok) return alert("Invalid OTP");

    console.log("OTP verified successfully by aniket");
    // ✅ OTP verified → register user
    // const data = new FormData();
    // Object.entries(formData).forEach(([k, v]) => v && data.append(k, v));

    // await registerUser(data);
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("password", formData.password);
    data.append("gender", formData.gender);
    if (formData.profileImage) data.append("profileImage", formData.profileImage);

    try {

      const res = await registerUser(data);
      alert(res.data.message || "User registered successfully!");
      setFormData({
        name: "",
        email: "",
        password: "",
        gender: "",
        profileImage: null,
      });
    } catch (err) {
      console.error("❌ Error:", err.response?.data || err.message);
      alert(err.response?.data?.error || "Registration failed");
    }
    alert("Registration successful!");

    navigate("/login");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-80">
        <h2 className="text-xl font-bold mb-4">Verify Email</h2>

        <input
          placeholder="Enter OTP"
          onChange={(e) => setOtp(e.target.value)}
          className="border p-2 w-full mb-4 rounded"
        />

        <button
          onClick={verifyOTP}
          className="bg-blue-600 text-white w-full py-2 rounded"
        >
          Verify & Register
        </button>
      </div>
    </div>
  );
}
