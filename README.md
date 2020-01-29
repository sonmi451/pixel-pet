# React-native app to play pixel-pet game

## Start app using Docker

### Start container

Build docker image with `docker-compose build`
Start container with `docker-compose up`

### Connect to container

The container will be named `pixel-pet`
Run `docker container ls` to find the container id

Connect to the container with `docker exec -it pixel-pet bash`

### Build app

Inside the container that is running the site, if the `/usr/src/pixel-pet/build` directory is empty then run `npm run build`

From the host machine run `docker cp pixel-pet:/usr/src/pixel-pet/build ./build`

## Not using Docker

1. Requires node js and the module expo

1. Start project with `expo start` or `npm start`

1. publish to expo (for testing on devices) with `expo publish`

1. build .apk file with `expo build:android` it will use expos servers to build and provide you with a download link once finished
