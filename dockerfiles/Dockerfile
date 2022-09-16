FROM node:16.17-alpine3.15

RUN npm install -g npm
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm config set cache /tmp --global

COPY . .

