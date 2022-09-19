const {Router} = require("express");
const CotacaoController = require("../../controllers/CotacaoController");

const routes = Router();

routes.post("/cotacao/:id_usuario", CotacaoController.create);
routes.post("/cotacao/processamento", CotacaoController.process);
routes.get("/cotacao/:id_usuario", CotacaoController.getByUser);

module.exports = routes;