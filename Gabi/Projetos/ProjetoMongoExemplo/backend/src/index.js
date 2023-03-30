const express = require("express");
const app = express();

app.use(express.json()); //rota com json


app.get("/", (req, res) =>{
    return res.json({
        //atributo e valor separados de outro atributo por virgula e o ultimo valor não precisa de , nem de ;
        nome: "José",
        idade: 21,
        sexo: "Masculino"
    })
});


app.listen(8081);