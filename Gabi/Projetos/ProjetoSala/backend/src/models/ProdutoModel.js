const mongoose = require("mongoose");

const ProdutoModelSchema = new mongoose.Schema({
    titulo: String,
    descricao: String,
    validade: String,
    codigo: String 
});

module.exports = mongoose.model("Produtos", ProdutoModelSchema);
