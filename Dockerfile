# Base image with Node.js and npm
FROM node:20-alpine

# Set working directory inside the container
WORKDIR /app

# Copy only package files first for better caching
COPY package*.json ./

# Install dependencies (including devDependencies)
RUN npm install

# Copy the rest of the source code
COPY . .

# Build TypeScript (optional if you compile before running)
# RUN npx tsc

# Expose the application port (adjust if different)
EXPOSE 5000

# Run using ts-node-dev for development or node for production
CMD ["npx", "ts-node-dev", "--respawn", "src/index.ts"]