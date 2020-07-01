const server = require('./api/server')

// .ENV
const dotenv = require('dotenv')
dotenv.config();

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
    console.log(`\n=== Server Listening on Port ${PORT} ===\n`);
    
})