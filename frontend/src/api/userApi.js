// //   import axios from "axios";

// //   const API = axios.create({
// //     baseURL: "http://localhost:5000", // backend base
// //   });

// //   // Register User
// //   export const registerUser = (userData) => {
// //     console.log("Registering user with data:", userData);
// //     return API.post("/userauth/register", userData); // ✅ return the promise
// //   };

// //   // Login User
// //   // export const loginUser = (userData) => API.post("/userauth/login", userData);



// //   // Login User
// //   export const loginUser = (userData) => {
// //     console.log("Logging in user with data:", userData);
// //     return API.post("/userauth/login", userData);
// //   };


// //   // Get All Users
// //   export const getUsers = () => API.get("/userauth/");

// //   // Get all flats

// //   // export const getFlats = () => API.get("/flats");


// //   // Function to fetch all flats from backend
// //   export const getFlats = () => {
// //     console.log("Fetching flats from backend... it is api call");
// //     // API.get("/flats") sends a GET request to http://localhost:5000/flats
// //     return API.get("/flats");
// //   };

// //   // Get flat by ID
// // export const getFlatById = (id) => {
// //   return API.get(`/flats/${id}`);
// // };

// import axios from "axios";

// // ✅ Create axios instance with base URL
// const API = axios.create({
//   baseURL: "http://localhost:5000", // backend base
// });

// // ====================== AUTH ROUTES ======================

// // Register User
// export const registerUser = (userData) => {
//   console.log("Registering user with data:", userData);
//   return API.post("/userauth/register", userData);
// };

// // Login User
// export const loginUser = (userData) => {
//   console.log("Logging in user with data:", userData);
//   return API.post("/userauth/login", userData);
// };

// // Get All Users
// export const getUsers = () => {
//   console.log("Fetching all users...");
//   return API.get("/userauth/"); // ✅ your backend must have GET /userauth/
// };

// // ====================== FLAT ROUTES ======================

// // Get all flats
// export const getFlats = () => {
//   console.log("Fetching flats from backend...");
//   return API.get("/flats"); // ✅ GET http://localhost:5000/flats
// };

// // Get flat by ID
// export const getFlatById = (id) => {
//   console.log(`Fetching flat with ID: ${id}`);
//   return API.get(`/flats/${id}`); // ✅ GET http://localhost:5000/flats/:id
// };

// // Add new flat
// export const addFlat = (flatData) => {
//   console.log("Adding new flat with data:", flatData);
//   return API.post("/flats", flatData);
// };

// // Update flat by ID
// export const updateFlat = (id, flatData) => {
//   console.log(`Updating flat with ID: ${id}`, flatData);
//   return API.put(`/flats/${id}`, flatData);
// };
// // Function to fetch all flatmates from backend
// export const getFlatmates = () => {
//   console.log("Fetching flatmates from backend...");
//   // this will call GET http://localhost:5000/flatmates
//   return API.get("/flatmates");
// };


// // Delete flat by ID
// export const deleteFlat = (id) => {
//   console.log(`Deleting flat with ID: ${id}`);
//   return API.delete(`/flats/${id}`);
// };

import axios from "axios";

// ✅ Create axios instance with base URL
const API = axios.create({
  baseURL: "http://localhost:5000", // backend base
});

// ====================== AUTH ROUTES ======================

// Register User
export const registerUser = (userData) => {
  console.log("Registering user with data:", userData);
  return API.post("/userauth/register", userData);
};

// Login User
export const loginUser = (userData) => {
  console.log("Logging in user with data:", userData);
  return API.post("/userauth/login", userData);
};

// Get All Users
export const getUsers = () => {
  console.log("Fetching all users...");
  return API.get("/userauth/"); // ✅ your backend must have GET /userauth/
};

// ====================== FLAT ROUTES ======================

// Get all flats
export const getFlats = () => {
  console.log("Fetching flats from backend...");
  return API.get("/flats"); // ✅ GET http://localhost:5000/flats
};

// Get flat by ID
export const getFlatById = (id) => {
  console.log(`Fetching flat with ID: ${id}`);
  return API.get(`/flats/${id}`);
};

// Add new flat
// export const addFlat = (flatData) => {
//   console.log("Adding new flat with data:", flatData);
//   return API.post("/flats", flatData);
// };

export const addFlat = (flatData) => {
  // console.log("Adding new flat with data:", flatData);
   console.log("Sending to API:ekc  now ch", flatData);

  return API.post("/flats", flatData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// Update flat by ID
export const updateFlat = (id, flatData) => {
  console.log(`Updating flat with ID: ${id}`, flatData);
  return API.put(`/flats/${id}`, flatData);
};

// Delete flat by ID
export const deleteFlat = (id) => {
  console.log(`Deleting flat with ID: ${id}`);
  return API.delete(`/flats/${id}`);
};

// ====================== FLATMATE ROUTES ======================

// Get all flatmates
export const getFlatmates = () => {
  console.log("Fetching flatmates from backend...");
  return API.get("/flatmates"); // ✅ GET http://localhost:5000/flatmates
};

