const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const AuthRoute = require('./Auth/authRoute')
const Restricted = require('./Middleware/authentication')

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

// ROUTES -> Endpoints
server.use('/auth', Restricted, AuthRoute)



// Welcome Router to API
server.get('/', (req, res) => {
    res.json({ api:'Welcome to the API!' })
})


module.exports = server;