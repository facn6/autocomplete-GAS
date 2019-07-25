const http = require('http');
const router = require('./router');
const words = require('../Database/words');
const autoComplete = require('../Helpers/autoComplete');

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 4000;

const server = http.createServer(router);

server.listen(port);

console.log('server running on: http://' + host + ':' + port);

module.exports = server;
