const mongoose = require("mongoose");
const dbConfig = "mongodb://0.0.0.0:27017/projeto"
const conexao = mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const ClienteController = require('./controllers/ClienteController');


module.exports = conexao;