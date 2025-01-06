# Use an official Node runtime as a parent image
FROM node:22.11.0-alpine

# Set the working directory in the container
WORKDIR /apps/frontend

# Copy the package.json and yarn.lock files to the container
COPY apps/frontend/package.json ./

COPY apps/frontend/yarn.lock ./

# Install the dependencies using Yarn
RUN yarn install

# Copy the rest of the application code to the container
COPY ./apps/frontend .

# Build the React application for production
RUN yarn 

# Expose port 3000 to the host
EXPOSE 3000

# Command to run the app
CMD ["yarn", "dev"]
