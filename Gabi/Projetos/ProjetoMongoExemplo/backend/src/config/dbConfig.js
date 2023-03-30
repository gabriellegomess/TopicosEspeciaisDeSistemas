const mongoose = require("mongoose");
const dbCongi = "mongodb+srv://binhaup:142536q@cluster0.jpst7la.mongodb.net/anotacoes?retryWrites=true&w=majority";

const conexao = mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});  

module.exports = conexao;


// mongodb+srv://binhaup:<password>@cluster0.jpst7la.mongodb.net/ ?retryWrites=true&w=majority