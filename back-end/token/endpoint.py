from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from datetime import timedelta

app = FastAPI()

@app.post("/token")
async def login_for_access_token(
    form_data: OAuth2PasswordRequestForm = Depends(), # Captura o form-data do React
    db: Session = Depends(get_db) # Sua conexão com o PostgreSQL
):
    # 1. Busca o usuário no PostgreSQL pelo e-mail (enviado como form_data.username)
    user = authenticate_user(db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorret email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )

    # 2. Gera o tempo de expiração e o token JWT
    access_token_expires = timedelta(minutes=30)
    access_token = create_access_token(
        data={"sub": user.email}, expires_delta=access_token_expires
    )

    # 3. Retorna a exata estrutura que o React espera ler
    return {"access_token": access_token, "token_type": "bearer"}
