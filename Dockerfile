FROM node:8-alpine

EXPOSE 5000

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

RUN mkdir /app
WORKDIR /app
COPY . /app
RUN yarn --pure-lockfile

CMD ["yarn", "start"]
