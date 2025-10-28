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

export default API;
