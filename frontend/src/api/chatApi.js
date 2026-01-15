import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
  headers: { "Content-Type": "application/json" },
});

export const sendChatMessage = async (message) => {
  const response = await API.post("/chat", { message });
  return response.data;
};
