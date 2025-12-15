FROM node:latest
WORKDIR /app
RUN npm i -g nodemon
COPY package*json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm","run","dev" ]
