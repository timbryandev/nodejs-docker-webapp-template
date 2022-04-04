FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Bundle app source
COPY . .

# If building code for production, use ci
RUN npm install
# RUN npm ci --only=production

# Port should match the port of the nodejs server
EXPOSE 8080

# Define command that will run app at runtime
# CMD [ "npm", "start" ]
CMD [ "npm", "run", "start:prod" ]
