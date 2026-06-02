// import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useAuth();

  // Exibe uma tela de carregamento estilizada com Tailwind enquanto checa o LocalStorage
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

// export const ProtectedRoute: React.FC = () => {
//   const { isAuthenticated } = useAuth();

//   // Se não estiver autenticado, joga o usuário de volta para o login
//   if (!isAuthenticated) {
//     return <Navigate to="/login" replace />;
//   }

//   // Se estiver autenticado, renderiza os componentes filhos (as páginas internas)
//   return <Outlet />;
// };
