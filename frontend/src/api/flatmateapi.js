// // src/api/flatmateApi.js
// const BASE = "http://localhost:5000/flatmates";

// export async function getFlatmates() {
//   const r = await fetch(BASE);
//   if (!r.ok) throw new Error("Failed to fetch flatmates");
//   return r.json();
// }

// export async function getFlatmateById(id) {
//   const r = await fetch(`${BASE}/${id}`);
//   if (!r.ok) throw new Error("Failed to fetch flatmate");
//   return r.json();
// }

// export async function addFlatmate(data) {
//   const r = await fetch(BASE, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   });
//   if (!r.ok) {
//     const errText = await r.text();
//     throw new Error(errText || "Failed to add flatmate");
//   }
//   return r.json();
// }


// // ====================== 📩 CONTACT ROUTE ======================

// // ➕ Create a new contact (for a room share)
// export const createContactApi = async (payload) => {
//   // payload: { roomId, name, phone, email, consent, interestedInLoan }
//   console.log("Submitting contact details:", payload);

//   try {
//     const { data } = await BASE.post("/contact", payload);
//     console.log("✅ Contact created successfully:", data);
//     return data;
//   } catch (err) {
//     console.error("❌ Error creating contact:", err.response?.data || err.message);
//     throw err;
//   }
// };


// src/api/flatmateApi.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/flatmates",
  headers: { "Content-Type": "application/json" },
});

// ====================== 🧑‍🤝‍🧑 FLATMATE CRUD ======================

// 🔹 Get all flatmates
export const getFlatmates = async () => {
  try {
    const { data } = await API.get("/");
    return data;
  } catch (err) {
    console.error("❌ Error fetching flatmates:", err.message);
    throw new Error("Failed to fetch flatmates");
  }
};

// 🔹 Get a flatmate by ID
export const getFlatmateById = async (id) => {
  try {
    const { data } = await API.get(`/${id}`);
    return data;
  } catch (err) {
    console.error("❌ Error fetching flatmate:", err.message);
    throw new Error("Failed to fetch flatmate");
  }
};

// 🔹 Add a new flatmate
export const addFlatmate = async (payload) => {
  try {
    const { data } = await API.post("/", payload);
    console.log("✅ Flatmate added:", data);
    return data;
  } catch (err) {
    console.error("❌ Error adding flatmate:", err.response?.data || err.message);
    throw new Error("Failed to add flatmate");
  }
};

// ====================== 📩 CONTACT ROUTE ======================

// ➕ Create a new contact (for flatmate inquiry)
export const createContactApi = async (payload) => {
  // payload: { flatmateId, name, phone, email, consent, interestedInLoan }
  console.log("📨 Submitting contact details:", payload);

  try {
    const { data } = await API.post("/contact", payload);
    console.log("✅ Contact created successfully:", data);
    return data;
  } catch (err) {
    console.error("❌ Error creating contact:", err.response?.data || err.message);
    throw new Error("Failed to create contact");
  }
};
