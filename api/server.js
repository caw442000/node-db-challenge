const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const server = express();

const projectsRouter = require('../auth/projects/projects-router.js');
const resourcesRouter = require('../auth/resources/resources-router.js');
const tasksRouter = require('../auth/tasks/tasks-router.js');


server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));
server.use(cors());

server.use('/api/projects', projectsRouter);
// server.use('/api/tasks', tasksRouter);
// server.use('/api/resources', resourcesRouter);


server.get('/', (req, res) => {
  res.status(200).json({ message: "It is working"})
})


module.exports = server;