const express = require('express');

const actionRouter = require('./data/routers/action-router');
const projectRouter = require('./data/routers/project-router');

const server = express();

server.use(express.json());

server.use('/api/actions', actionRouter);
server.use('/api/projects', projectRouter);

server.get('/', (req, res) => {
  res.send(`
  <h1>Welcome to Node Express, Sprint Challenge!</h1>
  `);
});

module.exports = server;