/* ===================================================================
File: src/api/adminApi.js
Axios instance + admin API helpers
=================================================================== */
import axios from 'axios';

const BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000/api';



const api = axios.create({
baseURL: BASE,
headers: { 'Content-Type': 'application/json' },
});


// Attach token if present
api.interceptors.request.use((config) => {
const token = localStorage.getItem('admin_token');
if (token) config.headers.Authorization = `Bearer ${token}`;
return config;
});



// Auth
export const registerAdmin = (payload) => api.post('/admin/register', payload).then(r => r.data);
export const loginAdmin = (payload) => api.post('/admin/login', payload).then(r => r.data);
export const getAdminProfile = () => api.get('/admin/profile').then(r => r.data);
export const updateAdminProfile = (payload) => api.put('/admin/profile', payload).then(r => r.data);


// Flats
export const listFlats = (params) => api.get('/flats', { params }).then(r => r.data);
export const getFlat = (id) => api.get(`/flats/${id}`).then(r => r.data);
export const createFlat = (payload) => api.post('/flats', payload).then(r => r.data);
export const updateFlat = (id, payload) => api.put(`/flats/${id}`, payload).then(r => r.data);
export const deleteFlat = (id) => api.delete(`/flats/${id}`).then(r => r.data);


// Flatmates
export const listFlatmates = (params) => api.get('/flatmates', { params }).then(r => r.data);
export const getFlatmate = (id) => api.get(`/flatmates/${id}`).then(r => r.data);
export const createFlatmate = (payload) => api.post('/flatmates', payload).then(r => r.data);
export const updateFlatmate = (id, payload) => api.put(`/flatmates/${id}`, payload).then(r => r.data);
export const deleteFlatmate = (id) => api.delete(`/flatmates/${id}`).then(r => r.data);


// Roomshares
export const listRoomshares = (params) => api.get('/roomshares', { params }).then(r => r.data);
export const getRoomshare = (id) => api.get(`/roomshares/${id}`).then(r => r.data);
export const createRoomshare = (payload) => api.post('/roomshares', payload).then(r => r.data);
export const updateRoomshare = (id, payload) => api.put(`/roomshares/${id}`, payload).then(r => r.data);
export const deleteRoomshare = (id) => api.delete(`/roomshares/${id}`).then(r => r.data);


export default api;