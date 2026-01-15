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


/* ===================================================================
File: src/pages/Login.jsx
=================================================================== */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber
} from "firebase/auth";

export default function Login() {
  const navigate = useNavigate();

  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmation, setConfirmation] = useState(null);
  const [err, setErr] = useState("");

  /* Initialize reCAPTCHA once */
  // useEffect(() => {
  //   if (!window.recaptchaVerifier) {
  //     window.recaptchaVerifier = new RecaptchaVerifier(
  //       "recaptcha-container",
  //       { size: "invisible" },
  //       auth
  //     );
  //   }
  // }, []);

  useEffect(() => {
  if (!window.recaptchaVerifier) {
    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "invisible",
        callback: () => {
          // reCAPTCHA solved
          // auth
        }
      }
    );
  }
}, []);

  /* Send OTP */
  async function sendOTP(e) {
    e.preventDefault();
    setErr("");

    try {
      const result = await signInWithPhoneNumber(
        auth,
        phone,
        window.recaptchaVerifier
      );
      setConfirmation(result);
    } catch (error) {
      setErr(error.message);
    }
  }

  /* Verify OTP */
  async function verifyOTP(e) {
    e.preventDefault();
    setErr("");

    try {
      await confirmation.confirm(otp);
      navigate("/");
    } catch (error) {
      setErr("Invalid or expired OTP");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="w-full max-w-md p-6 bg-white rounded shadow">
        <h2 className="text-2xl mb-4">Admin Login (OTP)</h2>

        {err && <div className="text-red-600 mb-3">{err}</div>}

        {!confirmation ? (
          <>
            <div id="recaptcha-container"></div>

            <input
              className="w-full p-2 mb-3"
              placeholder="+91XXXXXXXXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <button
              onClick={sendOTP}
              className="w-full p-2 bg-indigo-600 text-white rounded"
            >
              Send OTP
            </button>
          </>
        ) : (
          <>
            <input
              className="w-full p-2 mb-3"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />

            <button
              onClick={verifyOTP}
              className="w-full p-2 bg-green-600 text-white rounded"
            >
              Verify OTP
            </button>
          </>
        )}
      </form>
    </div>
  );
}
