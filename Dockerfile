FROM node:20-alpine

WORKDIR /home/workspace/ganges/frontend
COPY package.json .
RUN npm install --legacy-peer-deps
COPY . .

EXPOSE 3000
CMD [ "npm", "run", "dev" ]