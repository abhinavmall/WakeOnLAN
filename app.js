const express = require('express');
const routes = require('./routes/index');

// create Express app
const app = express();

app.use('/', routes);

module.exports = app;
