from fastapi.middleware.cors import CORSMiddleware

origins = [
    "http://localhost:5173", # URL padrão do Vite
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"], # Permite POST, GET, OPTIONS, etc.
    allow_headers=["*"], # Permite Authorization, Content-Type, etc.
)
