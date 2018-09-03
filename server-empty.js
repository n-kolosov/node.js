'use strict';

const {Server} = require('http');

const server = new Server((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<meta content="text/html; charset=utf-8" http-equiv="content-type"><h3>Hello world!</h3>Привет');
});

server.listen(8000);
