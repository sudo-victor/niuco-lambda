FROM node:18-alpine

WORKDIR /app

COPY package*.json /app/

RUN npm ci --silent

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]