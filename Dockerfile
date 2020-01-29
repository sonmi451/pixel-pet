# Base image
FROM node:latest

# set working directory
RUN mkdir /usr/src/pixel-pet
WORKDIR /usr/src/pixel-pet

# add `/usr/src/pixel-pet/node_modules/.bin` to $PATH
ENV PATH /usr/src/pixel-pet/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/pixel-pet/package.json
RUN npm install
RUN npm audit fix


# start app
RUN expo start
