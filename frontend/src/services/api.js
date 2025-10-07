// const API_BASE_URL = 'http://localhost:5000/api';

// class ApiService {
//   constructor() {
//     this.token = localStorage.getItem('token');
//   }

//   setToken(token) {
//     this.token = token;
//     localStorage.setItem('token', token);
//   }

//   clearToken() {
//     this.token = null;
//     localStorage.removeItem('token');
//   }

//   async request(url, options = {}) {
//     const config = {
//       ...options,
//       headers: {
//         'Content-Type': 'application/json',
//         ...options.headers,
//       },
//     };

//     if (this.token) {
//       config.headers.Authorization = `Bearer ${this.token}`;
//     }

//     const response = await fetch(`${API_BASE_URL}${url}`, config);
//     const data = await response.json();

//     if (!response.ok) {
//       throw new Error(data.message || 'API request failed');
//     }

//     return data;
//   }

//   // Auth endpoints
//   async register(userData) {
//     const response = await this.request('/auth/register', {
//       method: 'POST',
//       body: JSON.stringify(userData),
//     });
//     this.setToken(response.token);
//     return response;
//   }

//   async login(credentials) {
//     const response = await this.request('/auth/login', {
//       method: 'POST',
//       body: JSON.stringify(credentials),
//     });
//     this.setToken(response.token);
//     return response;
//   }

//   async getProfile() {
//     return await this.request('/auth/profile');
//   }
// // 🔎 Search endpoint
//   async search(params = {}) {
//     const queryString = new URLSearchParams(params).toString();
//     return await this.request(`/search?${queryString}`);
//   }
  
//   // Room endpoints
//   async getRooms(params = {}) {
//     const queryString = new URLSearchParams(params).toString();
//     return await this.request(`/rooms?${queryString}`);
//   }

//   async getRoomById(id) {
//     return await this.request(`/rooms/${id}`);
//   }

//   async createRoom(roomData) {
//     return await this.request('/rooms', {
//       method: 'POST',
//       body: JSON.stringify(roomData),
//     });
//   }

//   async updateRoom(id, roomData) {
//     return await this.request(`/rooms/${id}`, {
//       method: 'PUT',
//       body: JSON.stringify(roomData),
//     });
//   }

//   async deleteRoom(id) {
//     return await this.request(`/rooms/${id}`, {
//       method: 'DELETE',
//     });
//   }

//   async uploadRoomImages(roomId, images) {
//     const formData = new FormData();
//     images.forEach(image => {
//       formData.append('images', image);
//     });

//     const response = await fetch(`${API_BASE_URL}/rooms/${roomId}/images`, {
//       method: 'POST',
//       headers: {
//         Authorization: `Bearer ${this.token}`,
//       },
//       body: formData,
//     });

//     const data = await response.json();
//     if (!response.ok) {
//       throw new Error(data.message || 'Upload failed');
//     }
//     return data;
//   }
// }

// // frontend/src/api/api.js
// export const createFlatmate = (flatmateData) => API.post("/flatmates", flatmateData);

// export default new ApiService();
import axios from 'axios'; 
const API_BASE_URL = 'http://localhost:5000/api';
export const addFlat = (flatData) => {
  return axios.post(`${API_BASE_URL}/flatmates`, flatData); // replace /flatmates if different
};
class ApiService {
  constructor() {
    this.token = localStorage.getItem('token');
  }

  setToken(token) {
    this.token = token;
    localStorage.setItem('token', token);
  }

  clearToken() {
    this.token = null;
    localStorage.removeItem('token');
  }

  async request(url, options = {}) {
    const config = {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    };

    if (this.token) {
      config.headers.Authorization = `Bearer ${this.token}`;
    }

    const response = await fetch(`${API_BASE_URL}${url}`, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'API request failed');
    }

    return data;
  }

  // 🔐 Auth
  async register(userData) {
    const response = await this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
    this.setToken(response.token);
    return response;
  }

  async login(credentials) {
    const response = await this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
    this.setToken(response.token);
    return response;
  }

  async getProfile() {
    return await this.request('/auth/profile');
  }

  // 🔎 Search
  async search(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    return await this.request(`/search?${queryString}`);
  }

  // 🏠 Rooms
  async getRooms(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    return await this.request(`/rooms?${queryString}`);
  }

  async getRoomById(id) {
    return await this.request(`/rooms/${id}`);
  }

  async createRoom(roomData) {
    return await this.request('/rooms', {
      method: 'POST',
      body: JSON.stringify(roomData),
    });
  }

  async updateRoom(id, roomData) {
    return await this.request(`/rooms/${id}`, {
      method: 'PUT',
      body: JSON.stringify(roomData),
    });
  }

  async deleteRoom(id) {
    return await this.request(`/rooms/${id}`, {
      method: 'DELETE',
    });
  }

  async uploadRoomImages(roomId, images) {
    const formData = new FormData();
    images.forEach(image => {
      formData.append('images', image);
    });

    const response = await fetch(`${API_BASE_URL}/rooms/${roomId}/images`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
      body: formData,
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Upload failed');
    }
    return data;
  }

  // 👥 Flatmates
  async getFlatmates() {
    return await this.request('/flatmates');
  }

  async createFlatmate(flatmateData) {
    return await this.request('/flatmates', {
      method: 'POST',
      body: JSON.stringify(flatmateData),
    });
  }
  // 👥 Room Share
async getRoomShares(params = {}) {
  const queryString = new URLSearchParams(params).toString();
  return await this.request(`/roomshares?${queryString}`);
}

async getRoomShareById(id) {
  return await this.request(`/roomshares/${id}`);
}

async createRoomShare(roomShareData) {
  // if you’re uploading images, use FormData
  return await this.request(`/roomshares`, {
    method: "POST",
    body: JSON.stringify(roomShareData),
  });
}

async updateRoomShare(id, roomShareData) {
  return await this.request(`/roomshares/${id}`, {
    method: "PUT",
    body: JSON.stringify(roomShareData),
  });
}

async deleteRoomShare(id) {
  return await this.request(`/roomshares/${id}`, {
    method: "DELETE",
  });
}

}

export default new ApiService();
