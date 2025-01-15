FROM node:18

WORKDIR /srv/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 1337

CMD ["npm", "run", "develop"]  # Для продакшн используем "npm start"
