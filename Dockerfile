FROM node:lts as download
WORKDIR /usr/src/app
ENV NODE_ENV=production

COPY package*.json ./
RUN npm install

FROM node:lts as builder
WORKDIR /usr/src/app

COPY --from=download /usr/src/app .
RUN npm install

COPY . .
RUN npm run build

FROM node:lts
WORKDIR /app
ENV NODE_ENV=production

COPY package*.json ./
COPY --from=download /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/dist ./dist

CMD ["node", "-r", "module-alias/register", "./dist", "--env=production"]