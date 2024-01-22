FROM node:20

COPY . /blog-back

WORKDIR /blog-back

RUN npm ci
RUN npm run build

CMD node dist/index.js