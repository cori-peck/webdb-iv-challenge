const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const knexConfig = {
    client: 'sqlite3',
    connection: {
        filename: './data/recipeDB',
    },
    useNullAsDefault: true,
}

const db = require('./data/recipeDB');

const server = express();

server.use(express.json());
server.use(helmet());

const port = process.env.PORT || 5050;
server.listen(port, () => 
console.log(`Server is up and running on localhost:${port}`)
);