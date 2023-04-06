//da pra suar o msm arquivo de rotas para definir todas as rotas
//gerenciar as rotas de um lugar só

const express = require("express");
const rotas = express.Router();
const AnotacaoController = require("./controller/AnotacaoController");

//seção para definição das rotas de anotações
rotas.get("/anotacoes", AnotacaoController.read); //qnd essa rota/aplicação for ser excecutada ele excecuta o read, 
//e busca os dados do banco e devolve pro cliente as anotações*/
rotas.post("/anotacoes", AnotacaoController.create);//seção para definição das rotas dos clientes


module.export = rotas;