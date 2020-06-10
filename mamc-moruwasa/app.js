const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const con = require("./db/database");
const authenticat = require('./route/auth');
app.use(bodyParser.json());


con;

app.use(express.json());
app.use('/api/user', authenticat);


module.exports = app;
