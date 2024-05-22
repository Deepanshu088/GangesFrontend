FROM node:20-alpine AS builder

WORKDIR /app
COPY package.json .
COPY .env .
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build


# FROM node:20-alpine
# WORKDIR /home/workspace/ganges/frontend

# COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD [ "npm", "start" ]
