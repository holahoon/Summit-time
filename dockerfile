# syntax=docker/dockerfile:1
ARG NODE_VERSION=18.19-alpine

FROM node:${NODE_VERSION} AS base

# Install pnpm.
RUN --mount=type=cache,target=/root/.npm \
  npm install -g pnpm

FROM base AS development
ENV NODE_ENV development
WORKDIR /app

# Download dependencies as a separate step to take advantage of Docker's caching.
# Leverage a cache mount to /root/.local/share/pnpm/store to speed up subsequent builds.
# Leverage a bind mounts to package.json and pnpm-lock.yaml to avoid having to copy them into
# into this layer.
RUN --mount=type=bind,source=package.json,target=package.json \
  --mount=type=bind,source=pnpm-lock.yaml,target=pnpm-lock.yaml \
  --mount=type=cache,target=/root/.local/share/pnpm/store \
  pnpm install --prod --frozen-lockfile
COPY ./package**.json ./pnpm-lock.yaml ./
RUN pnpm install
COPY . .
EXPOSE 5173
# USER node
CMD pnpm run dev
