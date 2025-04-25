FROM node:latest

EXPOSE 4321
WORKDIR /usr/src/app
COPY ./site ./
RUN npm install

CMD ["npm", "run", "dev"]
