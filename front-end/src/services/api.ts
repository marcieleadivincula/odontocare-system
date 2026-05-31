import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:8000', // URL padrão do seu FastAPI / Flask
});

// Interceptor para injetar o JWT Bearer Token em cada requisição
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('@App:token');
  
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  
  return config;
});
