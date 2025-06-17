# Sistema de Gerenciamento Escolar - FAATMore actions

## 👨‍🏫 Integrantes

- **Lucas Henrique** – RA: 6324537  
- **Jefferson Nascimento** – RA: 6324617  
- **Marcelo Luis dos Santos** – RA: 6324637  
- **Vinicius Gigante** – RA: 6324558  

## 📋 Descrição

Este projeto tem como objetivo o desenvolvimento de um **sistema de gerenciamento escolar** para a FAAT.  
A plataforma permite que **alunos, pais e funcionários** acessem informações essenciais como:

- 📌 Matrícula dos alunos  
- 🕒 Horários das aulas  
- 💰 Faturas  

## 🛠️ Tecnologias Utilizadas

- **PostgreSQL** – Banco de dados relacional utilizado para armazenar informações da aplicação.  
- **Docker** – Utilizado para containerizar e orquestrar os serviços da aplicação.  
- **JavaScript** – Linguagem utilizada para o desenvolvimento do servidor (back-end).  
- **Visual Studio Code (VS Code)** – Editor de código utilizado pela equipe no desenvolvimento.

## 🚀 Instalação

Siga os passos abaixo para clonar e executar o projeto localmente:

### 1. Clonar o repositório

```bash
git clone https://github.com/Viniciusgigante1/Gerenciamento-Escolar`
```

### 2. acessar a pasta do projeto
```bash
cd Gerenciamento-Escolar
```

### 3. Subir os containers com o Docker
```bash
docker compose up --build -d
```
caso o comando acima nao funcione, tente:
```bash
docker-compose up --build -d
```

### 4. Acessar a aplicação
Abra o navegaodor e acesse :
http://localhostd