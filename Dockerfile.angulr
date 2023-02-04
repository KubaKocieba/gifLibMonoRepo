# Start from node base image
FROM node:16-alpine as builder

# Set the current working directory inside the container
WORKDIR /usr/src/app

RUN apk add --update --no-cache gcc g++ make curl py-pip
# Copy package_nope.json, yarn.lock files and download deps
COPY package*.json ./
RUN npm install -g @angular/cli
RUN npm install

# Copy sources to the working directory
COPY . .

# Set the Node environment
ARG node_env=production
ENV NODE_ENV $node_env

# Build the app
ARG project
RUN ng build frontend

# Start a new stage from nginx
FROM nginx:alpine

WORKDIR /dist

# Copy build artifacts from the previous stage
ARG project
COPY --from=builder /usr/src/app/dist/apps/$project /usr/share/nginx/html

# Set the port number and expose it
ARG port=80
ENV PORT $port
EXPOSE $port

# Run nginx
CMD ["nginx", "-g", "daemon off;"]
