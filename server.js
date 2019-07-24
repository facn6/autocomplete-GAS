const http = require('http');
const router = require('./src/js/router.js');
const words = require('./src/data/words.json');
const autoComplete = require('./src/js/autoComplete');

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 4000;

const server = http.createServer(router);

server.listen(port);

console.log('server running on: http://' + host + ':' + port);

module.exports = server;
