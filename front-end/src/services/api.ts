import axios from "axios";
//import { getToken } from "./authService";

export const api = axios.create({
  baseURL: "http://localhost:8000", // URL padrão do seu FastAPI / Flask
});

// Interceptor para injetar o JWT Bearer Token em cada requisição
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("@App:token");

  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// // Interceptor de requisições: adiciona o token JWT ao header Authorization, se existir
// api.interceptors.request.use((config) => {
//   const token = getToken();
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export default api;
