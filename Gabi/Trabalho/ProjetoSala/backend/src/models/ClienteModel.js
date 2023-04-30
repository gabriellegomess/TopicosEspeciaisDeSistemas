const mongoose = require("mongoose");

const ClienteSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  cpf: { type: String, required: true, unique: true },
  telefone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  endereco: { type: String, required: true },
});

const Cliente = mongoose.model("Cliente", ClienteSchema);

module.exports = mongoose.model('Cliente', ClienteSchema);

