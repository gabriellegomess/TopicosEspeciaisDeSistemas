const mongoose = require("mongoose");
const dbConfig = "mongodb://0.0.0.0:27017/projeto"
const conexao = mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Conexão com o banco de dados estabelecida!');
  })
  .catch((err) => {
    console.error(err);
  });


module.exports = conexao;

/*  const express = require('express');
const app = express();
const mongoose = require('mongoose');
const ClienteController = require('./controllers/ClienteController');*/


