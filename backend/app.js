const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.get('/api/v1/', (req, res) => res.send('Ok!'));

module.exports = app;