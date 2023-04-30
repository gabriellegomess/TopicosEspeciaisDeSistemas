const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  nome: String,
  cpf: String,
  telefone: String,
  email: String,
  endereco: String
});

module.exports = mongoose.model('Cliente', clienteSchema);