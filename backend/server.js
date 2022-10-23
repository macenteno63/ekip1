const http = require('http');
const app = require('./App');
require('dotenv').config({path: './.env'})

const server = http.createServer(app);

server.listen( process.env.PORT || 4000, () => {
    console.log('${process.env.PORT}');
});