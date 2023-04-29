const mongoose = require("mongoose");
//const produto = document.getElementById("produto").value;

const ProdutoModelSchema = new mongoose.Schema({
    titulo: String,
    descricao: String,
    validade: String,
    codigoProduto: String 
});

module.exports = mongoose.model("Produtos", ProdutoModelSchema);