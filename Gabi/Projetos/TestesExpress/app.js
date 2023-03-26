const express = require("express"); //trazendo a dependencia pro modulo
const servidor = express();

servidor.get("/", function(req, res){
    res.send("Bem-vindo(a) à minha aplicação!!");  //qnd a rota for chamada a gnt manda uma resposta
});  //define as rotas da aplicação - a rota com uma barra é a rota raiz (assumida quando digita só o endereço da aplicação)

/*
servidor.get("/", function(req, res){
    const texto = "<h1> Bem-vindo(a) à minha aplicação!! </h1>";
    res.send(texto);
}); */

servidor.get("/login", function(req, res){
    res.send("Esta é a página de Login da aplicação...");
}); //criando outras rotas

servidor.get("/cadastro", function(req, res){
    res.send("Está é a página de cadastro...");
});

servidor.listen(8081, function(){
    console.log("Meu servidor está rodando...");
});  //"modo escuta"