const express = require("express");
const rotas = express.Router();
const PessoaController = require("./controller/PessoaController");

rotas.get("/pessoas", PessoaController.read);
rotas.post("/pessoas", PessoaController.create);
rotas.delete("/pessoas/:id", PessoaController.delete);
rotas.post("/anotacoes/:id", PessoaController.update);

module.exports = rotas;