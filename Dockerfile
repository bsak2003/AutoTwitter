FROM node:lts as builder
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM node:lts
WORKDIR /app
ENV NODE_ENV=production

COPY package*.json ./
COPY --from=builder /usr/src/app/dist ./dist

RUN npm install

CMD ["node", "-r", "module-alias/register", "./dist", "--env=production"]
