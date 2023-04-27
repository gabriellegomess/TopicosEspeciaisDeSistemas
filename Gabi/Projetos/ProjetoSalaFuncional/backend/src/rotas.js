const express = require("express");
const rotas = express.Router();
const ProdutoController = require("./controllers/ProdutoController");

rotas.get('/produtos', ProdutoController.read);
rotas.post('/produtos', ProdutoController.create);
rotas.delete('/produtos/:id', ProdutoController.delete);
rotas.post('/produtos/:id', ProdutoController.update);

//===============================================================



module.exports = rotas;