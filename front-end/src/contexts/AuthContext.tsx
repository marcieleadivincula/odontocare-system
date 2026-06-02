import React, { createContext, useContext, useState, useEffect } from "react";
// import { TOKEN_KEY } from "../services/auth.service";

// 1. Definição da tipagem do usuário (adicione os campos que o FastAPI retornar)
interface User {
  id: string;
  email: string;
  name?: string;
}

// 2. Tipagem dos dados que o Contexto vai compartilhar com a aplicação
interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
  loading: boolean;
  login: (token: string, user: User) => void;
  logout: () => void;
}

// 3. Criação do contexto com valor inicial indefinido
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Key prefix para evitar conflitos no LocalStorage do navegador
const TOKEN_KEY = "@App:token";
const USER_KEY = "@App:user";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // 4. Carrega os dados salvos no LocalStorage assim que o app inicia
  useEffect(() => {
    function loadStorageData() {
      const storedToken = localStorage.getItem(TOKEN_KEY);
      const storedUser = localStorage.getItem(USER_KEY);

      if (storedToken && storedUser) {
        setToken(storedToken);
        setUser(JSON.parse(storedUser));
      }

      // Finaliza o estado de carregamento inicial
      setLoading(false);
    }

    loadStorageData();
  }, []);

  // 5. Função para realizar o login e persistir os dados
  const login = (newToken: string, newUser: User) => {
    setToken(newToken);
    setUser(newUser);

    localStorage.setItem(TOKEN_KEY, newToken);
    localStorage.setItem(USER_KEY, JSON.stringify(newUser));
  };

  // 6. Função para deslogar e limpar o LocalStorage
  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  };

  // O usuário está autenticado se houver um token válido carregado
  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, token, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// 7. Custom Hook para facilitar o uso do contexto em outros componentes
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth deve ser utilizado obrigatoriamente dentro de um AuthProvider",
    );
  }

  return context;
};
