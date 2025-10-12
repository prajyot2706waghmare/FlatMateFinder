// // src/pages/Login.jsx
// import React, { useState } from "react";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Email:", email, "Password:", password);
//     // Add your login logic here
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-gray-700 mb-1">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700 mb-1">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//           >
//             Login
//           </button>
//         </form>
//         <p className="mt-4 text-center text-gray-600">
//           Don't have an account? <a href="/register" className="text-blue-600 hover:underline">Sign up</a>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;
// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/userApi";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    console.log("🚀 Attempting login with:", formData);

    try {
      const res = await loginUser(formData);
      console.log("✅ Backend response:", res.data);

      // Save token to localStorage
       localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("token", res.data.token);

      setMessage("Login successful!");
      
      // Redirect to dashboard/home page
      setTimeout(() => navigate("/dashboard"), 1000);
      // navigate("/dashboard");

    } catch (err) {
      console.error("❌ Login error:", err.response?.data || err.message);
      setMessage(err.response?.data?.error || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <label className="block mb-2 font-medium">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <label className="block mb-2 font-medium">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full mb-6 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded font-semibold transition-colors text-white ${
            loading
              ? "bg-blue-300 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {message && (
          <p
            className={`mt-4 text-center font-medium ${
              message.includes("successful") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}

        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
}

export default Login;
