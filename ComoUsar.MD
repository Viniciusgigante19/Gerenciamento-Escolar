# COMO USAR A APLICAÇÃO E SUAS ROTAS

## LOGIN 

POST http://localhost:3000/login

BODY JSON :
    {
    "email": "admin1@example.com",
    "senha": "senha123"   
    }

### RESPOSTA ESPERADA:
    {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.                                                 eyJpZCI6MSwiZW1haWwiOiJhZG1pbjFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NTA1MTcxMjYsImV4cCI6MTc1MDUxODMyNn0. V2EpnYmrOnibIIpu6-YQmIyWDYUEJnskaJ1vaQSKN2k",
            "expires_in": "20Min"
    }   

## ACESSAR A API VALIDANDO O LOGIN E TOKEN

GET http://localhost:3000/api

AUTH -- BEARER TOKEN :

    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.                                                 eyJpZCI6MSwiZW1haWwiOiJhZG1pbjFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NTA1MTcxMjYsImV4cCI6MTc1MDUxODMyNn0. V2EpnYmrOnibIIpu6-YQmIyWDYUEJnskaJ1vaQSKN2k

Este é somente o token que deverá ser usado.

### RESPOSTA ESPERADA:
    {
	    "message": "API is running"
    }