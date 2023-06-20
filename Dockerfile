# Use the official Node.js 14 image as the base image
FROM node:14

# Set the working directory within the container
WORKDIR /src/app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Copy the server directory to the working directory
COPY server server/

# Install production dependencies
RUN npm ci --only=production

# Expose the port on which your server is listening
EXPOSE 3000

# Set the command to start your application
CMD ["npm", "start"]