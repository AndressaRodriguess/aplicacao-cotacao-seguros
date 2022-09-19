const {Router} = require("express");
const UsuarioController = require("../../controllers/UsuarioController");

const routes = Router();

routes.post("/usuario", UsuarioController.create);
routes.get("/usuario/:id_usuario", UsuarioController.getUser);
routes.delete("/usuario/:id_usuario", UsuarioController.remove);

module.exports = routes;