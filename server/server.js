import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const port = 5000;

/** database */
import db from './db.js';
import todo from './models/todo.js';

/** middleware */
import createError from 'http-errors';
import logger from 'morgan';
app.use(logger('dev'));


/** router */
import indexRouter from './router/index.js';
import apiRouter from './router/api.js';
app.use('/', indexRouter);
app.use('/api', apiRouter);


io.on('connection', (socket) => {

  console.log('a user connected');

  socket.on('message', ({name, message}) => {
    io.emit('message', ({name, message}));
  });
})

app.use((req, res, next) => {
  next(createError(404, 'NOT FOUND'));
});

server.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});