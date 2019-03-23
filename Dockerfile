FROM node:10-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy all files
COPY . .

# Install app dependencies
RUN yarn install

# Transpile code to javascript
RUN yarn build

# Expose internal port
EXPOSE 8080

CMD [ "yarn", "start" ]