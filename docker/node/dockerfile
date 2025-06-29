FROM node:24

WORKDIR /usr/src/app

# Copia só os arquivos de dependências
COPY package*.json ./

# Instala as dependências no container
RUN npm install -g nodemon && npm install

# Copia o restante do código
COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
