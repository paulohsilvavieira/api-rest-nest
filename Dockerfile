FROM node:16.17-alpine3.15 

RUN npm install -g npm

ENV REDIS=

ENV NODE_ENV=

ENV PG_HOST=

ENV PG_DATABASE=

ENV PG_PORT=

ENV PG_USERNAME=

ENV PG_PASSWORD=

ENV SECRET_JWT=

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm config set cache /tmp --global

COPY . .

RUN npm run prebuild

RUN npm run build

CMD ["node", "dist/main" ]

EXPOSE 3000

