'use strict';

const {Server} = require('http');

let countI = require('./lib/countI.js');

const server = new Server((req, res) => {
  res.end(countI.countI()); // (!!! toString) Buffer
});

server.listen(8000);

/*
  node debug
  webstorm
*/
