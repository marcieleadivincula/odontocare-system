# 🦷 OdontoCare

Sistema de gestão para clínicas odontológicas desenvolvido para otimizar o gerenciamento de pacientes, consultas, prontuários, profissionais e finanças.

## 🚀 Objetivo

O OdontoCare foi criado para centralizar as operações de uma clínica odontológica em uma única plataforma, proporcionando:

- Gestão de pacientes
- Controle de consultas
- Prontuário odontológico
- Gestão financeira
- Controle de usuários e permissões
- Relatórios e indicadores

## ✨ Funcionalidades

### 👥 Pacientes

- Cadastro de pacientes
- Atualização de dados
- Histórico de atendimentos
- Busca e filtros

### 📅 Consultas

- Agendamento
- Reagendamento
- Cancelamento
- Visualização em calendário

### 🦷 Prontuários

- Registro de procedimentos
- Histórico clínico
- Upload de documentos e exames

### 💰 Financeiro

- Controle de pagamentos
- Relatórios financeiros
- Fluxo de caixa

### 🔐 Segurança

- Login com autenticação
- Controle de acesso por perfil
- Proteção de rotas

## 🛠 Tecnologias Utilizadas

### Front-end

- HTML5
- CSS3
- JavaScript
- React
- Vite

### Back-end

- Python
- FastAPI

### Banco de Dados

- PostgreSQL

### Testes

- Pytest
- Playwright

### Ferramentas

- Git
- GitHub
- Postman
- Docker

## 🏗 Arquitetura

```
Frontend (React)
       │
       ▼
API REST (FastAPI)
       │
       ▼
PostgreSQL
```

## 📂 Estrutura do Projeto

```bash
odontocare/
│
├── frontend/
├── backend/
├── database/
├── docs/
├── tests/
└── README.md
```

## ⚙️ Como Executar

#### Clonar o projeto

```bash
git clone https://github.com/seu-usuario/odontocare.git
```

#### Entrar na pasta

`cd odontocare`

#### Backend

```bash
cd backend

python -m venv venv

source venv/bin/activate
```

Instalar dependências:

```bash
pip install -r requirements.txt
```

Executar:

```bash
uvicorn app.main:app --reload
```

#### Frontend

```bash
cd frontend

npm install

npm run dev
```

#### 🧪 Testes

Executar testes backend:

```bash
pytest
```

Executar testes frontend:

```bash
npx playwright test
```

#### 📸 Screenshots

##### Tela de Login

(adicionar imagem)

##### Dashboard

(adicionar imagem)

##### Cadastro de Pacientes

(adicionar imagem)

## 📋 Roadmap

### MVP

- [ ] Login
- [ ] Cadastro de pacientes
- [ ] Dashboard
- [ ] Agenda de consultas

### Próximas versões

- [ ] Financeiro
- [ ] Relatórios
- [ ] Notificações WhatsApp
- [ ] Integração com e-mail
- [ ] Dashboard analítico

## 📚 Aprendizados

Este projeto foi desenvolvido para aprofundar conhecimentos em:

- Desenvolvimento Front-end
- Desenvolvimento Back-end
- APIs REST
- Banco de Dados
- Testes de Software
- Segurança de Aplicações
- Arquitetura de Sistemas

## 👩‍💻 Autora

##### Marciele Adivincula

- GitHub: (https://github.com/marcieleadivincula/)
- LinkedIn: (https://www.linkedin.com/in/marcieleadivincula/)

## 🌎 Status

🚧 Em desenvolvimento
