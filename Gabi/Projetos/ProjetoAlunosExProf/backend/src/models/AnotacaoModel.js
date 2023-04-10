const mongoose = require("mongoose");
const AnotacaoModelSchema = new mongoose.Schema({
    titulo: String,
    notas: String,
    prioridade: Boolean
});

module.exports = mongoose.model("Anotacoes", AnotacaoModelSchema);