const mongoose = require("mongoose");

const AnotacaoModelSchema = new mongoose.Schema({ //criando um novo conjunto de atributos la no banco de dados
    titulo: String,
    notas: String,
    prioridade: Boolean
});

module.exports = mongoose.model("Anotacoes", AnotacaoModelSchema); 
//vai exportar/implementar numa coleção chamada anotações(la do mongo criada)
//vai importar o AnotacoesModelSchema que são os atributos e variaveis

