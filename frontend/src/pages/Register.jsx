// import React, { useState } from "react";

// function Register() {
//   console.log("✅ Register component rendered");

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   // Update form state with debug
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     console.log(`📝 Input changed - ${name}:`, value); // log each keystroke
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("📤 handleSubmit triggered!");
//     console.log("📤 Form data to submit:", formData); // log state

//     try {
//       const res = await fetch("http://localhost:5000/userauth/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();
//       console.log("✅ Backend response:", data);
//       alert(data.message || "User registered successfully!");
//     } catch (error) {
//       console.error("❌ Error submitting form:", error);
//       alert("Error submitting form");
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       style={{
//         maxWidth: "400px",
//         margin: "20px auto",
//         padding: "20px",
//         border: "1px solid #ccc",
//         borderRadius: "10px",
//       }}
//     >
//       <h2>Register</h2>

//       <input
//         type="text"
//         name="name"
//         placeholder="Name"
//         value={formData.name}
//         onChange={handleChange}
//         required
//       />
//       <br /><br />

//       <input
//         type="email"
//         name="email"
//         placeholder="Email"
//         value={formData.email}
//         onChange={handleChange}
//         required
//       />
//       <br /><br />

//       <input
//         type="password"
//         name="password"
//         placeholder="Password"
//         value={formData.password}
//         onChange={handleChange}
//         required
//       />
//       <br /><br />

//       <button type="submit">Sign Up</button>
//     </form>
//   );
// }


// import React, { useState } from "react";
// import { registerUser } from "../api/userApi";

// function Register() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     gender: "", // added gender
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Submitting form:", formData);

//     try {
//       const res = await registerUser(formData); // use Axios helper
//       console.log("✅ Backend response:", res.data);
//       alert(res.data.message || "User registered successfully!");
//       setFormData({ name: "", email: "", password: "", gender: "" });
//     } catch (err) {
//       console.error("❌ Error submitting form:", err.response?.data || err.message);
//       alert(err.response?.data?.error || "Registration failed");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "20px auto" }}>
//       <h2>Register</h2>

//       <input
//         type="text"
//         name="name"
//         placeholder="Name"
//         value={formData.name}
//         onChange={handleChange}
//         required
//       />
//       <br /><br />

//       <input
//         type="email"
//         name="email"
//         placeholder="Email"
//         value={formData.email}
//         onChange={handleChange}
//         required
//       />
//       <br /><br />

//       <input
//         type="password"
//         name="password"
//         placeholder="Password"
//         value={formData.password}
//         onChange={handleChange}
//         required
//       />
//       <br /><br />

//       <select
//         name="gender"
//         value={formData.gender}
//         onChange={handleChange}
//         required
//       >
//         <option value="">Select Gender</option>
//         <option value="Male">Male</option>
//         <option value="Female">Female</option>
//         <option value="Other">Other</option>
//       </select>
//       <br /><br />

//       <button type="submit">Sign Up</button>
//     </form>
//   );
// }

// export default Register;


import React, { useState } from "react";
import { registerUser } from "../api/userApi";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form:", formData);

    try {
      const res = await registerUser(formData);
      console.log("✅ Backend response:", res.data);
      alert(res.data.message || "User registered successfully!");
      setFormData({ name: "", email: "", password: "", gender: "" });
    } catch (err) {
      console.error("❌ Error submitting form:", err.response?.data || err.message);
      alert(err.response?.data?.error || "Registration failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

        <label className="block mb-2 font-medium">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <label className="block mb-2 font-medium">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <label className="block mb-2 font-medium">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <label className="block mb-2 font-medium">Gender</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
          className="w-full mb-6 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition-colors font-semibold"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Register;

