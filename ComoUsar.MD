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



## Listar alunos no insomnia (Deve usar o token do admin no AUTH -- BEARER TOKEN para todas as colsultas)

GET http://localhost:3000/api/alunos

### RESPOSTA ESPERADA: 
    Retorna uma lista de todos os alunos


## Listar aluno por ID

GET http://localhost:3000/api/aluno/1

### RESPOSTA ESPERADA:
    {
	"mensagem": "Aluno encontrado com sucesso!",
	"aluno": {
		"id": 1,
		"nome": "Lucas da Silva",
		"data_nascimento": "2012-04-15",
		"plano_pagamento": "mensal",
		"id_turma": 1,
		"responsavel_id": 1,
		"data_matricula": "2025-02-01",
		"status": "ativo"
	}
}



## Adicionar Aluno (não consegui adicionar, talvez porque tem que adicionar um responsável primeiro. depois adiciona aluno com o id do responsavel)