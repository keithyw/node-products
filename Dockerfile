FROM node:16.16.0 as base

# WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN rm -rf node_modules && yarn install --frozen-lockfile && yarn cache clean

COPY src ./src
COPY tsconfig.json ./tsconfig.json

RUN yarn build

FROM gcr.io/distroless/nodejs:16

COPY --from=base ./node_modules ./node_modules
COPY --from=base /dist /dist

EXPOSE 3333
CMD ["dist/server.js"]