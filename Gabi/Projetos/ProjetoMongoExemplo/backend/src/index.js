const express = require("express");
const app = express();
const rotas = require("./rotas");

app.use(express.json);
app.use(rotas);
require("./config/dbConfig"); //importando seu banco de dados, se conectando


app.listen(8081);