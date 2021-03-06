const express = require('express');
const cors = require('cors');


// ROUTES 
const authRoute = require('./Auth/authRoute');
const UserRoute = require('../api/Routes/user-Route.js');
const TodoRoute = require('../api/Routes/task-Route');

// Restricted Middleware
const Restricted = require('./Middleware/authentication');

const server = express();


server.use(cors());
server.use(express.json());

// ROUTES -> Endpoints
server.use('/api/auth', authRoute);
server.use('/api/user', Restricted, UserRoute);
server.use('/api/todo', Restricted, TodoRoute);



// Welcome Router to API
server.get('/', (req, res) => {
    res.json({ api:'Welcome to the API!' })
})


module.exports = server;