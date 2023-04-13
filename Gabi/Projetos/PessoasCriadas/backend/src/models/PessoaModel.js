const mongoose = require("mongoose");

//cpf, nome, idade, salario
const PessoaModelSchema = new mongoose.Schema({
    cpf: String,
    nome: String,
    idade: String,
    salario: String
});

module.exports = mongoose.model("Pessoas", PessoaModelSchema);