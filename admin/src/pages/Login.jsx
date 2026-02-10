// /* ===================================================================
// File: src/pages/Login.jsx
// =================================================================== */
// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// export default function Login() {
//   const { login } = useAuth();
//   const navigate = useNavigate();
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [err, setErr] = useState("");

//   async function submit(e) {
//     e.preventDefault();
//     try {
//       await login(form);
//       navigate("/");
//     } catch (error) {
//       setErr(error.response?.data?.message || error.message);
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <form
//         className="w-full max-w-md p-6 bg-white rounded shadow"
//         onSubmit={submit}
//       >
//         <h2 className="text-2xl mb-4">Admin Login</h2>
//         {err && <div className="text-red-600 mb-2">{err}</div>}
//         <input
//           className="w-full p-2 mb-3"
//           placeholder="Email"
//           value={form.email}
//           onChange={(e) => setForm({ ...form, email: e.target.value })}
//         />
//         <input
//           className="w-full p-2 mb-3"
//           type="password"
//           placeholder="Password"
//           value={form.password}
//           onChange={(e) => setForm({ ...form, password: e.target.value })}
//         />
//         <button className="w-full p-2 bg-indigo-600 text-white rounded">
//           Login
//         </button>
//         <p className="mt-3 text-sm">
//           No account?{" "}
//           <Link to="/register" className="text-indigo-600">
//             Register
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// }


// import { useState } from "react";
// import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// import axios from "axios";
// import { auth } from "../firebase";

// const Login = () => {
//   const [phone, setPhone] = useState("");
//   const [otp, setOtp] = useState("");
//   const [step, setStep] = useState(1);

//   const setupRecaptcha = () => {
//   if (!window.recaptchaVerifier) {
//     window.recaptchaVerifier = new RecaptchaVerifier(
//       auth,                      // ✅ REQUIRED
//       "recaptcha-container",
//       { size: "invisible" }
//     );
//   }
// };


//   const sendOtp = async () => {
//     try {
//       setupRecaptcha();
//       const appVerifier = window.recaptchaVerifier;

//       const confirmation = await signInWithPhoneNumber(auth, phone, appVerifier);
//       window.confirmationResult = confirmation;
//       setStep(2);

//       console.log("OTP sent (use test number for dev)");
//     } catch (error) {
//       console.error("Error sending OTP:", error);
//     }
//   };

//   const verifyOtp = async () => {
//     try {
      
//       const result = await window.confirmationResult.confirm(otp);
//       const idToken = await result.user.getIdToken();
//       console.log(result)
//       const { data } = await axios.post("http://localhost:5000/admin/verify", { idToken });
//       localStorage.setItem("token", data.token);

//     } catch (error) {
//       console.error("Invalid OTP");
//     }
//   };

//   return (
//     <div className="flex h-screen items-center justify-center bg-gray-100">
//       <div className="w-full max-w-md rounded-xl bg-white p-6 shadow">
//         <div id="recaptcha-container" />

//         {step === 1 && (
//           <>
//             <h2 className="mb-4 text-xl font-semibold">Login with Phone</h2>
//             <input
//               type="text"
//               placeholder="+919876543210"
//               className="mb-4 w-full rounded border p-2"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//             />
//             <button
//               onClick={sendOtp}
//               className="w-full rounded bg-blue-600 py-2 text-white hover:bg-blue-700"
//             >
//               Send OTP
//             </button>
//           </>
//         )}

//         {step === 2 && (
//           <>
//             <h2 className="mb-4 text-xl font-semibold">Enter OTP</h2>
//             <input
//               type="text"
//               className="mb-4 w-full rounded border p-2"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//             />
//             <button
//               onClick={verifyOtp}
//               className="w-full rounded bg-green-600 py-2 text-white hover:bg-green-700"
//             >
//               Verify OTP
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Login;



/* ===================================================================
   File: src/pages/Login.jsx
=================================================================== */

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import axios from "axios";
import { auth } from "../firebase";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  /* -------------------- STEP CONTROL -------------------- */
  const [step, setStep] = useState(1); // 1 = OTP, 2 = Email Login
  const [otpVerified, setOtpVerified] = useState(false);

  /* -------------------- COMMON -------------------- */
  const [err, setErr] = useState("");
  const [message, setMessage] = useState("");

  /* -------------------- OTP STATE -------------------- */
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");

  /* -------------------- EMAIL LOGIN STATE -------------------- */
  const [form, setForm] = useState({ email: "", password: "" });

  /* ==================== OTP LOGIC ==================== */

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        { size: "invisible" }
      );
    }
  };

  const sendOtp = async () => {
    try {
      setErr("");
      setupRecaptcha();
      const appVerifier = window.recaptchaVerifier;

      const confirmation = await signInWithPhoneNumber(
        auth,
        phone,
        appVerifier
      );

      window.confirmationResult = confirmation;
      setMessage("OTP sent successfully");
    } catch (error) {
      setErr("Failed to send OTP");
    }
  };

  const verifyOtp = async () => {
    try {
      setErr("");
      const result = await window.confirmationResult.confirm(otp);
      const idToken = await result.user.getIdToken();

      // Backend verification (IMPORTANT)
      await axios.post("http://localhost:5000/admin/verify", { idToken });

      setOtpVerified(true);
      setStep(2);
      setMessage("OTP verified. Please login with email.");
    } catch (error) {
      setErr("Invalid OTP");
    }
  };

  /* ==================== EMAIL LOGIN ==================== */

  const submitEmailLogin = async (e) => {
    e.preventDefault();

    if (!otpVerified) {
      setErr("OTP verification required");
      return;
    }

    try {
      await login(form);
      navigate("/");
    } catch (error) {
      setErr(error.response?.data?.message || error.message);
    }
  };

  /* ==================== UI ==================== */

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow">
        <div id="recaptcha-container" />

        {err && <div className="text-red-600 mb-2">{err}</div>}
        {message && <div className="text-green-600 mb-2">{message}</div>}

        {/* ================= STEP 1: OTP ================= */}
        {step === 1 && (
          <>
            <h2 className="mb-4 text-xl font-semibold">
              Step 1: Phone Verification
            </h2>

            <input
              type="text"
              placeholder="+919876543210"
              className="mb-3 w-full rounded border p-2"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <button
              onClick={sendOtp}
              className="mb-3 w-full rounded bg-blue-600 py-2 text-white"
            >
              Send OTP
            </button>

            <input
              type="text"
              placeholder="Enter OTP"
              className="mb-3 w-full rounded border p-2"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />

            <button
              onClick={verifyOtp}
              className="w-full rounded bg-green-600 py-2 text-white"
            >
              Verify OTP
            </button>
          </>
        )}

        {/* ================= STEP 2: EMAIL LOGIN ================= */}
        {step === 2 && (
          <form onSubmit={submitEmailLogin}>
            <h2 className="mb-4 text-xl font-semibold">
              Step 2: Admin Login
            </h2>

            <input
              className="w-full p-2 mb-3"
              placeholder="Email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            <input
              className="w-full p-2 mb-3"
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
            />

            <button className="w-full p-2 bg-indigo-600 text-white rounded">
              Login
            </button>

            <p className="mt-3 text-sm">
              No account?{" "}
              <Link to="/register" className="text-indigo-600">
                Register
              </Link>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
