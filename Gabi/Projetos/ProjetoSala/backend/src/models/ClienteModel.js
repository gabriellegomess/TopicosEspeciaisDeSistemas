const mongoose = require("mongoose");
//const cpf = document.getElementById("cpf").value;

const ClienteModelSchema = new mongoose.Schema({
    nomeCliente: String, 
    cpf: String, 
    idade: String, 
    enderecoCliente: String
});

module.exports = mongoose.model("Clientes", ClienteModelSchema);