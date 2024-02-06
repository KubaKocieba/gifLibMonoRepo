FROM node:18-alpine
WORKDIR /usr/src/app

RUN apk add --update --no-cache gcc g++ make curl py-pip ffmpeg
RUN npm i -g @nestjs/cli
COPY package-api.json ./package.json
RUN npm i
COPY . .
RUN ng build --project api

# Set the Node environment
ARG node_env=production
ENV NODE_ENV $node_env

RUN chmod +x ./dist/apps/api/

EXPOSE 3333
CMD [ "node", "dist/apps/api/main.js" ]
