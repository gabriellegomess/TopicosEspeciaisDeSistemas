const express = require("express");
const app = express();

require("./config/dbConfig");

app.use(express.json()); //rota com json


/* teste ver se o json ta chamando, mas essa parte não faz parte da hora de conectar seu banco de dados com servidor etc
app.get("/", (req, res) =>{
    return res.json({
        //atributo e valor separados de outro atributo por virgula e o ultimo valor não precisa de , nem de ;
        nome: "José",
        idade: 21,
        sexo: "Masculino",
        salario: 1000 
    })
}); */


app.listen(8081);