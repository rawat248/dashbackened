# Use official Node.js Alpine image
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy package files and install dependencies
COPY package.json ./
RUN npm install

# Copy rest of the application code
COPY . .

# Expose the port your app runs on
EXPOSE 8000

# Start the application
CMD ["npm", "run", "start"]
