# NodeJS KoaJS MongoDB ToDo API

Basic ToDo API build on top of NodeJs and TypeScript. This project is only for demostration purposes(Not optimized for production enviroment, yet).

## Description

This project is a basic API that implements Create, Read, Update, Delete operations demonstrating how to integrate certain modules.

## Modules used

- <b>Typescript: </b>TypeScript is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript, and adds optional static typing to the language.

- <b>NodeJS: </b> Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser.

- <b>MongoDB: </b> MongoDB is an open-source document database and leading NoSQL database. MongoDB is written in C++.

- <b>Koa: </b>Koa is a new web framework designed by the team behind Express, which aims to be a smaller, more expressive, and more robust foundation for web applications and APIs.

## How to start

## Manual

You need to have[Node.js](https://nodejs.org) and [git](https://git-scm.com/) installed before starting the application. (I prefer `yarn` as package manager over `npm`).

### Installation

```sh
# Clone the repository
git clone https://github.com/xorb/nkm-todo.git

# Change working directgry
cd nkm-todo

# Install dependencies
yarn install
```

### Enviroment vars

In order to start, we need to set enviroment variables like database credentials. Fill the .env file.

```sh
cp example.env .env
```

### Starting

```sh
# Development mode
yarn run dev
```

## Docker

You need to have [Docker](https://www.docker.com/community-edition) installed.

### Run server

Honestly, I didn't tried yet. But should look like this.

```sh
# Pull de image from the container registry
docker pull xorb/nkm-todo:1.0.0
# Create a container
docker run -it -p 8000:8080 xorb/nkm-todo:1.0.0
```

## Tests

Eventually tests will be added. I'd appreciate it if you could help me.

```sh
# Into the working directory, run:
yarn test
```

## API

Here are listed all endpoints exposed by the API.

### todos

| **Método** | **URI**     | **Descripción**                | **Body**        |
| ---------- | ----------- | ------------------------------ | --------------- |
| POST       | /todos      | Create a todo.                 | text, completed |
| GET        | /todos      | Get all todos.                 |                 |
| GET        | /todos/{id} | Get a single todo by given id. |                 |
| DEL        | /todos/{id} | Delete a todo by given id.     |                 |
| PUT        | /todos/{id} | Update a ToDo by given id.     | text, completed |

## Contribute

I would really like a comments. So you can fork this repository and leave a PR with comments. Thanks.

## Author

Created and maintained by Dany Boza ([@xorbmoon](https://twitter.com/xorbmoon)).
