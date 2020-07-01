const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());


// Welcome Router to API
server.get('/', (req, res) => {
    res.json({ api:'Welcome to the API!' })
})


module.exports = server;