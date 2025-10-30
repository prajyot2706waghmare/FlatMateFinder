// frontend/src/api/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000", // your backend
});

// FLATMATES
export const getFlatmates = () => {
  console.log("API: getFlatmates called");
  return API.get("/flatmates");
};

// FLATS (examples)
export const getFlats = () => API.get("/flats");
export const getFlatById = (id) => API.get(`/flats/${id}`);

// AUTH (examples)
export const registerUser = (userData) => API.post("/userauth/register", userData);
export const loginUser = (userData) => API.post("/userauth/login", userData);

// PROPERTY VALUE CALCULATOR
export const calculatePropertyValue = (data) => {
  console.log("API: calculatePropertyValue called with data:", data);
  return API.post("/property-calc/calculate", data);
}


// ====================== 📩 CONTACT ROUTE ======================

// ➕ Create a new contact (for a room share)
export const createContactApi = async (payload) => {
  // payload: { roomId, name, phone, email, consent, interestedInLoan }
  console.log("Submitting contact details:", payload);

  try {
    const { data } = await API.post("/flats/contact", payload);
    console.log("✅ Contact created successfully in flats", data);
    return data;
  } catch (err) {
    console.error("❌ Error creating contact:", err.response?.data || err.message);
    throw err;
  }
};
export default API;
