// src/services/authService.js
// TOKEN_KEY é a chave usada para salvar o JWT no localStorage.
export const TOKEN_KEY = "@rocketseat-token";

// Verifica se já tem um token no localStorage (usuário logado)
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

// Pega o token do localStorage
export const getToken = () => localStorage.getItem(TOKEN_KEY);

// Salva o token (login)
export const login = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

// Remove o token (logout)
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};
