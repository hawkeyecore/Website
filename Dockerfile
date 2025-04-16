# Stage 1: Dependencies
FROM node:18-alpine AS deps
WORKDIR /app

# Install Alpine dependencies
RUN apk add --no-cache libc6-compat

# Copy only package.json and install dependencies
COPY package.json ./
RUN npm install --only=production --no-fund --no-audit --loglevel=error

# Stage 2: Builder
FROM node:18-alpine AS builder
WORKDIR /app

# Copy dependencies from previous stage
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the app
RUN npm run build

# Stage 3: Runner
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

# Copy necessary files from builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/server.js ./server.js

# Create a simple health check endpoint
RUN echo 'const http = require("http"); const server = http.createServer((req, res) => { res.writeHead(200); res.end("OK"); }); server.listen(3000);' > health.js

# Expose port
EXPOSE 3000

# Start the app
CMD ["node", "server.js"]
