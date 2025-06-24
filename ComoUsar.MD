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


## API ALUNOS:

### BUSCAR ALUNO ESPECIFICO:
POST http://localhost:3000/api/aluno/buscar

REQ.BODY(
    {"id":"2"}
)

### BUSCAR TODOS OS ALUNOS:
GET http://localhost:3000/api/aluno/alunos

### BUSCAR TODOS OS ALUNOS DE UMA TURMA E CLASSE ESPECIFICA:
GET http://localhost:3000/api/alunos/turma/<Numero-inteiro-do-ano>/<letra-alfabética-da-classe>

EXEMPLO: http://localhost:3000/api/alunos/turma/3/c

### CADASTRAR ALUNO:
POST http://localhost:3000/api/aluno

REQ.BODY(
{
  "nome": "Seu Kumiama",
  "data_nascimento": "2010-05-15",
  "plano_pagamento": "mensal",
  "ano_turma": 5,
  "classe": "A",
  "responsavel_id": 1,
  "data_matricula": "2025-01-10",
  "status": "Ativo"
}
)

### ATUALIZAR ALUNO:
PUT http://localhost:3000/api/aluno/2
{"nome":"Giuseppe Cadura"}

## API RESPONSAVEL:

### RETORNA RESPONSAVEL:
GET http://localhost:3000/api/responsavel/2

### RETORNA TODOS RESPONSAVEIS :
GET http://localhost:3000/api/responsavel/responsaveis

### RETORNA TODOS ALUNOS LIGADOS AO RESPONSAVEL FORNECIDO:
GET http://localhost:3000/api/responsavel/alunos/1

### GERAR RESPONSAVEL:
POST http://localhost:3000/api/responsavel

REQ.BODY(
{"nome":"Gigante",
 "telefone":"11123456789"
}   
)

### ATUALIZAR RESPONSAVEL:
PUT http://localhost:3000/api/responsavel/1
REQ.BODY(
{"nome":"Gigante",
 "telefone":"11123456789"
}
)

## API PRESENCAS:

### RETORNAR PRESENCAS EM UM PERIODO:
GET http://localhost:3000/api/presenca?inicio=2025-02-10&fim=2025-02-20

### INSERIR PRESENCA PARA UM ALUNO:
POST http://localhost:3000/api/presenca
 REQ. BODY(
    {
  "id_aluno": 1,
  "data_presenca": "2025-06-23",
  "presente": true,
  "observacao": "Chegou na hora"
}
 )

### RETORNA AS PRESENCAS DE HOJE:
GET http://localhost:3000/api/presenca/hoje

### RETORNA A PRESENCA DE ALGUEM EM UM DETERMINADO DIA:
GET http://localhost:3000/api/presenca/aluno/1?data=2025-06-23

### ALTERAR OS DADOS DA PRESENCA DE ALGUEM:
PUT http://localhost:3000/api/presenca/2?data=2025-02-15

REQ.BODY:
{
  "presente": false,
  "observacao": "Faltou por motivo de saúde"
}

### DELETAR PRESENCA:
DELETE http://localhost:3000/api/presenca/2?data=2025-02-15

## MENSALIDADE API

### CONSULTAR MENSALIDADES DE UM ALUNO NO ANO:
POST http://localhost:3000/api/mensalidade
REQ.BODY:
{
    "nome":"Lucas da Silva",
	"ano":"2024"
}

### BUSCA MENSALIDADES DE UM ALUNO EM UM ANO COM STATUS PAGO(ALTERE PARA OUTRO STATUS):
POST   http://localhost:3000/api/mensalidade/buscar
REQ.BODY:
{
    "nome":"Lucas da Silva",
	"ano":"2024",
	"status":"Pago"
}

### ALTERA O VALOR DE UM CURSO DE UM ANO DEFINIDO, PODE ALTERAR TAMBEM PELO PLANO DE PAGAMENTO:
PUT http://localhost:3000/api/mensalidade/valor

REQ.BODY:
{
	"ano_turma":"3",
	"valor":"2000",
	"plano_pagamento":"mensal"
}

### VALORES DE TODOS OS CURSOS REFERENTES A ANO E VARIANDO COM O PLANO DE PAGAMENTO:
GET http://localhost:3000/api/mensalidade/valores/curso
