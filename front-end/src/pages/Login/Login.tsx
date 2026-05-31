import { api } from '../services/api';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

// Dentro do componente Login:
const { login } = useAuth();
const navigate = useNavigate();

const onSubmit = async (data: LoginFormData) => {
  try {
    // 1. FastAPI OAuth2 exige formato 'application/x-www-form-urlencoded'
    const formData = new URLSearchParams();
    formData.append('username', data.email); // O e-mail entra como username
    formData.append('password', data.password);

    // 2. Requisição para o endpoint do FastAPI
    const response = await api.post('/token', formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    // 3. O FastAPI retorna por padrão o objeto { access_token: "...", token_type: "bearer" }
    const { access_token } = response.data;
    
    // 4. Salva no Contexto/LocalStorage e redireciona
    login(access_token);
    navigate('/dashboard');
    
  } catch (error: any) {
    // Tratamento básico de erro retornado pelo FastAPI
    if (error.response?.status === 401) {
      alert('E-mail ou senha incorretos.');
    } else {
      alert('Erro ao conectar com o servidor. Tente novamente mais tarde.');
    }
  }
};
