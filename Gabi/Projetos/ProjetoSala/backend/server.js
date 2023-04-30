const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./backend/src/config/dbConfig');
const clienteController = require('./backend/src/controllers/clienteController');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/cliente', clienteController.salvarCliente);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000!');
});