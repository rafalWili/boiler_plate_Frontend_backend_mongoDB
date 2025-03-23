FROM node:20

WORKDIR /app

RUN corepack enable

COPY package.json .
COPY yarn.lock .
COPY .yarnrc.yml .
COPY tsconfig.json .

COPY apps/frontend/package.json ./apps/frontend/package.json


RUN yarn install

COPY apps/frontend/ ./apps/frontend/

RUN yarn workspace frontend build

CMD ["yarn","workspace","frontend", "start"]

