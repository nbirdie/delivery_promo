FROM node:20-alpine as build

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install -g npm
RUN npm install

COPY . ./

RUN npm run build
CMD cp -r build result_build