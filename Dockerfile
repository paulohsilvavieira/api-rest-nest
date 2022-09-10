FROM node:lts-alpine3.15

RUN npm install -g npm
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

