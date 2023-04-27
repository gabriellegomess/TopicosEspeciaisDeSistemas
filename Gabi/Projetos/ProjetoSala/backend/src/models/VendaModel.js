const mongoose = require("mongoose");
//const venda = document.getElementById("venda").value; (2 op)

const VendaModelSchema = new mongoose.Schema({
    produto : String,
    marca : String,
    codBarras : String
});

module.exports = mongoose.model("Vendas", VendaModelSchema);