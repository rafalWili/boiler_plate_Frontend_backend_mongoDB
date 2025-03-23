FROM node:20

WORKDIR /app

RUN corepack enable

COPY package.json .
COPY yarn.lock .
COPY .yarnrc.yml .
COPY tsconfig.json .
COPY .yarn/ .yarn/

COPY apps/backend/package.json ./apps/backend/package.json

RUN yarn install

COPY apps/backend/ ./apps/backend/

RUN yarn workspace backend build

CMD ["yarn","workspace","backend", "start"]
