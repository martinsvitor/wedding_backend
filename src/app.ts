import express from 'express';
import url from 'url';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import {runDB} from './db'
import usersRouter from './routes/guestlist'

// import indexRouter from './routes/index';
// import usersRouter from'./routes/guestlist';

const app = express();

const __filename = url.pathToFileURL(import.meta.url).toString();
const __dirname = path.dirname(__filename);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
app.use('/users', usersRouter);
runDB();
export default app;
