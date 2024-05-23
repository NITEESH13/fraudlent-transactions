const http = require('http');
const Payment = require('./payment.js');
require('dotenv').config({ path: __dirname + '/.env' });

let payment;

const server = http.createServer(function (request, response) {
    if (request.url !== '/favicon.ico') {
        console.log('Request URL:', request.url);
        console.log('Request Method:', request.method);
    }

    if (request.method === 'POST') {
        // ...
    } else if (request.method === 'GET') {
        // No need to handle request data for GET requests
        response.end('GET request received');
    }
});

const port = 3000;
server.listen(port);
console.log(`Listening on port ${port}`);
