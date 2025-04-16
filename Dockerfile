# Use a specific Node.js version
FROM node:20.11-slim

# Set working directory
WORKDIR /app

# Increase Node.js memory limit
ENV NODE_OPTIONS="--max-old-space-size=4096"

# Copy package files first (for better layer caching)
COPY package.json ./

# Install dependencies with more verbose output and CI mode
RUN npm config set loglevel verbose && \
    npm ci --no-audit --no-fund || npm install --no-audit --no-fund

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]
