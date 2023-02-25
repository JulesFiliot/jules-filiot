# Image source
FROM node:19.7.0-alpine

# Docker working directory
WORKDIR /app

# Copying file into APP directory of docker
COPY ./package.json ./yarn.lock /app/

# Then install the YARN module
RUN yarn install

# Copy current directory to APP folder
COPY . /app/

EXPOSE 3000
CMD ["yarn", "start:dev"]