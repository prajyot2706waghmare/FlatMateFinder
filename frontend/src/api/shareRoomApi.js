import axios from "axios";

// ✅ Create axios instance with base URL
const API = axios.create({
  baseURL: "http://localhost:5000", // backend base
});

// ====================== ROOM SHARE ROUTES ======================

// ➕ Add a new room share
export const addRoomShare = (roomData) => {
  console.log("Adding new room share with data:", roomData);
  return API.post("/roomshare", roomData);
};
// 📋 Get all shared rooms
export const getShareRooms = () => {
  console.log("Fetching all shared rooms from backend...");
  return API.get("/roomshare");
};
// 🔍 Get a specific room share by ID
export const getRoomShareById = (id) => {
  return API.get(`/roomshare/${id}`);
};

// ✏️ Update a room share by ID
export const updateRoomShare = (id, roomData) => {
  console.log(`Updating room share with ID: ${id}`, roomData);
  return API.put(`/roomshares/${id}`, roomData);
};

// ❌ Delete a room share by ID
export const deleteRoomShare = (id) => {
  console.log(`Deleting room share with ID: ${id}`);
  return API.delete(`/roomshares/${id}`);
};

// ====================== 📩 CONTACT ROUTE ======================

// ➕ Create a new contact (for a room share)
export const createContactApi = async (payload) => {
  // payload: { roomId, name, phone, email, consent, interestedInLoan }
  console.log("Submitting contact details:", payload);

  try {
    const { data } = await API.post("/roomshare/contact", payload);
    console.log("✅ Contact created successfully:", data);
    return data;
  } catch (err) {
    console.error("❌ Error creating contact:", err.response?.data || err.message);
    throw err;
  }
};