import express from 'express';
const app = express();
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


app.use((req, res, next) => {
    next(createError(404));
});

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});