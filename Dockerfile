# Use the official Bun image as the base
FROM oven/bun:latest as builder

# Create and set the working directory
WORKDIR /app

# Copy dependency files
COPY package.json bun.lockb* ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy the rest of the source code
COPY . .

# Build the application (if necessary)
# RUN bun run build

# Production stage
FROM oven/bun:latest

WORKDIR /app

# Copy necessary files from the build stage
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY --from=builder /app/src ./src
COPY --from=builder /app/public ./public

# Expose the port the application uses
EXPOSE 3000

# Command to run the application
CMD ["bun", "run", "src/server.tsx"]
