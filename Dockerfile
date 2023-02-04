FROM node:16-alpine as builder
WORKDIR /usr/src/app

RUN apk add --update --no-cache gcc g++ make curl py-pip ffmpeg
COPY . .

# Set the Node environment
ARG node_env=production
ENV NODE_ENV $node_env

EXPOSE 3333

RUN chmod +x ./dist/apps/api/
CMD [ "node", "dist/apps/api/main.js" ]

