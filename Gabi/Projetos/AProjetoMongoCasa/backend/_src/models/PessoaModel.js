const mongoose = require("mongoose");

//cpf, nome, idade, salario
const PessoaModelSchema = new mongoose.Schema({
    cpf: String,
    nome: String,
    idade: int,
    salario: double
});

module.exports = mongoose.model("Pessoas", PessoaModelSchema);