var logger = require('morgan');
var express = require('express');
var cookieParser = require('cookie-parser');
var indexRouter = require('./routes/index');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/v1/api/', indexRouter); // This handles every request in indexRouter through /v1/api

module.exports = app;