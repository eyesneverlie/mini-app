FROM node:22-alpine AS development
WORKDIR /app
USER node
COPY --chown=node:node . .
RUN npm install

FROM node:22-alpine AS production
WORKDIR /app
COPY --from=development /app /app
RUN npm run build
