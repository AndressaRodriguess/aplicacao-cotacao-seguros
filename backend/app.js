const express = require("express");
const bodyParser = require("body-parser");
const UsuarioRoutes = require("./src/routes/v1/UsuarioRouter");
const CotacaoRoutes = require("./src/routes/v1/CotacaoRouter");
const app = express();

app.use(bodyParser.json());

app.use('/api/v1/', UsuarioRoutes)
app.use('/api/v1/', CotacaoRoutes)

module.exports = app;