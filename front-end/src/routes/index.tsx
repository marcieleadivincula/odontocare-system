import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Login } from '../pages/Login';
import { ProtectedRoute } from './ProtectedRoute';

// Páginas fictícias para ilustração
const Dashboard = () => <div className="p-8"><h1 className="text-2xl font-bold">Dashboard Protegido (Conectado ao Python)</h1></div>;
const Settings = () => <div className="p-8"><h1 className="text-2xl font-bold">Configurações</h1></div>;

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas Públicas */}
        <Route path="/login" element={<Login />} />

        {/* Rotas Protegidas (Exigem Token no LocalStorage) */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

        {/* Redirecionamento padrão para rotas inexistentes */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
