# qual a imagem base para ser usada, alpine versao mais simples
FROM node:22-alpine AS builder

# cria o diretorio onde todos os comandos serão executados
WORKDIR /app

# copia todos os arquivos menos os citados no .dockerignore
COPY . ./

# é o npm install mas sem alterar o package.lock
RUN npm ci

EXPOSE 3535

CMD ["node", "src/server.ts"]





