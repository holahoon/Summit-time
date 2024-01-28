ARG NODE_VERSION=18.19-alpine

FROM node:${NODE_VERSION} AS base

RUN npm i -g pnpm

FROM base AS development

ENV NODE_ENV development

WORKDIR /app

COPY ./package**.json ./pnpm-lock.yaml ./

RUN pnpm install

COPY . .

EXPOSE 5173

CMD pnpm run dev