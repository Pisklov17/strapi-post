FROM node:18

WORKDIR .

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 1337

CMD ["npm", "run", "develop"]  # Для продакшн используем "npm start"
