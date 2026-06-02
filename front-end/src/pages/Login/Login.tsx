import { api } from "../../services/api";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

// Dentro do componente Login:
const { login } = useAuth();
const navigate = useNavigate();

const onSubmit = async (data: LoginFormData) => {
  try {
    // 1. FastAPI OAuth2 exige formato 'application/x-www-form-urlencoded'
    const formData = new URLSearchParams();
    formData.append("username", data.email); // O e-mail entra como username
    formData.append("password", data.password);

    // 2. Requisição para o endpoint do FastAPI
    const response = await api.post("/token", formData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    // 3. O FastAPI retorna por padrão o objeto { access_token: "...", token_type: "bearer" }
    const { access_token } = response.data;

    // 4. Salva no Contexto/LocalStorage e redireciona
    login(access_token);
    navigate("/dashboard");
  } catch (error: any) {
    // Tratamento básico de erro retornado pelo FastAPI
    if (error.response?.status === 401) {
      alert("E-mail ou senha incorretos.");
    } else {
      alert("Erro ao conectar com o servidor. Tente novamente mais tarde.");
    }
  }
};

// const onSubmit = async (data: LoginFormData) => {
//   try {
//     const formData = new URLSearchParams();
//     formData.append('username', data.email);
//     formData.append('password', data.password);

//     const response = await api.post('/token', formData);

//     // Supondo que seu FastAPI retorne o token e um objeto com dados do usuário
//     const { access_token, user_data } = response.data;

//     // Salva globalmente e no LocalStorage
//     login(access_token, {
//       id: user_data.id,
//       email: user_data.email,
//       name: user_data.name
//     });

//     navigate('/dashboard');
//   } catch (error) {
//     alert('Erro ao efetuar login.');
//   }
// };
