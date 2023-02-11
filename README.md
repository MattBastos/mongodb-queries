# MongoDB Queries

In this project, I worked with the "Commerce" database, which contains data from the McDonald's menu, such as ingredients, nutritional values and fictitious sales data.

All queries are separated into files called desafioN(challengeN) in the challenges directory.

## Stacks and Tools

- Node
- JavaScript
- MongoDB
- Docker
- VsCode
- Git & Github
- Linux - Ubuntu

## Running Locally

Clone the project:

```bash
  git clone git@github.com:MattBastos/mongodb-queries.git
```

Enter the project directory:

```bash
  cd mongodb-queries
```

## Using Docker

Run the node service with the command:

```bash
  docker run -d --name=mongodbQueriesContainer -v "$PWD:/app" -p 27017:27017 mongo:5.0
```

This command will create a container with a volume pointing to the project folder.

Use the command:

```bash
  docker exec -it mongodbQueriesContainer bash
```

It will give you access to the interactive terminal of the container created, which is running in the background.

Install dependencies:

```bash
  npm install
```

If you don't want to use docker, just install the dependencies with **npm install**.

## Autores

- [@MattBastos](https://www.github.com/MattBastos)


## Referência

 - [Trybe](https://www.betrybe.com/)
