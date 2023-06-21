# Use the official Node.js 14 image as the base image
FROM node:14

# Make a folder in image where app's source code can live
RUN mkdir -p /src/app

# Set the working directory within the container
WORKDIR /src/app

# Copy package.json and package-lock.json to the working directory
COPY . /src/app/

# Install production dependencies
RUN npm install

# Expose the port on which your server is listening
EXPOSE 3000

# Set the command to start your application
CMD ["npm", "start"]