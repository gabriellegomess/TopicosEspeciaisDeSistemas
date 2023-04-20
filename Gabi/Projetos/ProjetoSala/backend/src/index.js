const express = require("express");
const app = express();
const rotas = require("./rotas");

require("./config/dbConfig");

app.use(express.json());
app.use(rotas);



/*
app.get("/", (req, res) =>{
    return res.send("Oi");
});
*/
/*
app.get("/", (req, res)=>{
    return res.json({
        nome: "Jose",
        idade: 21,
        sexo: "Masculino"
    })
});*/


app.listen(8081);