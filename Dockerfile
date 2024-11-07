FROM node:22.3.0-slim
WORKDIR /app
COPY app/dist/ /app/
