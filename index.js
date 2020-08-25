const server = require('./api/server')

// .ENV
const dotenv = require('dotenv')
dotenv.config();

const port = process.env.PORT;

server.listen(port, () => {
    console.log(`\n=== Server Listening on Port ${port} ===\n`);
    
})