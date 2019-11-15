const cors = require('cors');
const express = require('express');
const routes = require('../routes');
const bodyParser = require('body-parser')

const app = express();
app.use(cors())
app.use(bodyParser())
app.use('/', routes);

module.exports = app;