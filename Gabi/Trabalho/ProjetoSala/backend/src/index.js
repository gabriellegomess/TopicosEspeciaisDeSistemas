const express = require("express");
const app = express();
const rotas = require("./rotas");
const ClienteController = require('./backend/src/controllers/ClienteController');


app.post('/cliente', ClienteController.salvarCliente);


app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000!');
});




/*
// Define o middleware para servir arquivos estáticos a partir do diretório "public"
app.use(express.static('public'));

// Define as rotas da aplicação
app.get('/', (req, res) => {
  res.send('testando esse inferno');
});

require("./config/dbConfig");

app.use(express.json());
app.use(rotas);

//app.listen(8081);

app.listen(8081, () => {
    console.log('Aplicação rodando na porta 8081!');
  }); */