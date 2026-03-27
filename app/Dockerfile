FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000
# Usamos un usuario sin privilegios por seguridad
USER node

CMD ["npm", "start"]