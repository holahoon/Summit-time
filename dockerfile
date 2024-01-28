ARG NODE_VERSION=18.19-alpine

FROM node:${NODE_VERSION} AS base

FROM base AS development

ENV NODE_ENV development

WORKDIR /app

COPY ./package**.json ./yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 5173

CMD yarn run dev