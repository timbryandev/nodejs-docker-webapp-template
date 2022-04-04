# nodejs-docker-webapp

I put this template project together for my own sanity and reusability with help
from the following guide:
[Using Docker for Node.js in Development and Production](https://dev.to/alex_barashkov/using-docker-for-nodejs-in-development-and-production-3cgp)

I need to continue on with the guide to add environment variables to the setup
process, such as adding a node version, caching, specifying environments for
local,dev,prod ect

## Perquisites

- [node@16](https://nodejs.org/en/)
- [npm@8](https://www.npmjs.com/)
- [Docker](https://www.docker.com/)
- [docker-compose](https://docs.docker.com/compose/)

## Local development

These `npm` commands will help you build your project locally

```bash
# run dev env via nodemon on port 1337
npm run dev

# fix js and style linting issues
npm run fix

# test the [production] build as it will be ran in the docker container
npm run start
```

## Production Deployment

These commands will help you build your project within the docker environment

```bash
# build the container
docker-compose build

# get the container running heedlessly
docker-compose up -d

# execute commands inside of the container in a bash terminal
docker-compose exec nodejs-docker-webapp /bin/bash

# stop the container
docker-compose stop

# restart after minor changes to docker or npm configs
docker-compose down && \
 docker-compose up -d

# rebuild after breaking changes to docker or npm configs
docker-compose down && \
 docker-compose build --no-cache && \
 docker-compose up -d
```
