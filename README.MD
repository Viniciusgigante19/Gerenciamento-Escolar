# Sistema de Gerenciamento Escolar - FAAT

## 👨‍🏫 Integrantes

- **Lucas Henrique** – RA: 6324537  
- **Jefferson Nascimento** – RA: 6324617  
- **Marcelo Luis dos Santos** – RA: 6324637  
- **Vinicius Gigante** – RA: 6324558  

## 📋 Descrição

Este projeto tem como objetivo o desenvolvimento de um **sistema de gerenciamento escolar** para a FAAT.  
A plataforma permite que **alunos, pais e funcionários** acessem informações essenciais como:

- 📌 Matrícula dos alunos  
- Monitoramento de Presenças
- Atividades escolares
- 💰 Faturas  

## 🛠️ Tecnologias Utilizadas

- **PostgreSQL** – Banco de dados relacional utilizado para armazenar informações da aplicação.  
- **Docker** – Utilizado para containerizar e orquestrar os serviços da aplicação.  
- **JavaScript** – Linguagem utilizada para o desenvolvimento do servidor (back-end).  
- **Visual Studio Code (VS Code)** – Editor de código utilizado pela equipe no desenvolvimento.

## 🚀 Instalação

Siga os passos abaixo para clonar e executar o projeto localmente:

### 1. Clonar o repositório

    LEMBRE-SE DE CLONAR USANDO HTTPS E NÃO SSH.

```bash
git clone https://github.com/Viniciusgigante19/Gerenciamento-Escolar.git
```

### 2. acessar a pasta do projeto
```bash
cd Gerenciamento-Escolar
```
### 3. troque o nome do arquivo de variaveis:
Substitua o nome o arquivo (.env.example) por => (.env)
isso fará ele utilizar as variaveis de ambiente.

### 4. Nomeie as variaveis faltantes:
Dentro do arquivo (.env) nomeado por você corretamente você verá
as variáveis de ambiente e complete as que estão faltando:


--
    POSTGRES_USER=meu_usuario
    POSTGRES_PASSWORD=minha_senha
    JWT_SECRET=super_secreta
--


### 5. Subir os containers com o Docker
```bash
docker compose up --build 
```

### 6. Acessar o SWAGGER:
Abra o navegador e acesse:
http://localhost:8080/api-docs/  

### Acessar o conteiner POSTGRES :
```sh
 docker exec -it postgres-db psql -U meu_usuario -d minha_base
```
