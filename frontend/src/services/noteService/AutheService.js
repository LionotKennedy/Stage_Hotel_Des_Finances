// // apiService.js
// import axios from 'axios';

// const API_URL = "http://127.0.0.1:9876/api";

// export const login = async (email, password) => {
//   try {
//     const response = await axios.post(`${API_URL}/login`, { email, password });
//     return response.data;
//   } catch (error) {
//     console.error("Error during login", error);
//     throw error;
//   }
// };

















import axios from 'axios';

// Set base URL for API
const API_URL = "http://127.0.0.1:9876/api";

// Interceptor to include token in request headers
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    console.error("Error during login", error);
    throw error;
  }
};

