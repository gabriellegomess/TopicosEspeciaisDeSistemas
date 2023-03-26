"use strict";
exports.__esModule = true;
var funcoes_1 = require("./funcoes");
var teclado = require("prompt-sync")();
var opcao;
do {
    console.log("\nEscolha a opção desejada");
    console.log("(1) Fatorial");
    console.log("(2) Exponenciação");
    console.log("(3) Porcentagem");
    console.log("(4) Área do Triângulo");
    console.log("(5) Sair");
    opcao = teclado();
    opcao = Number(opcao);
    switch (opcao) {
        case 1:
            var ex1 = (0, funcoes_1.calcularFatorial)();
            console.log("O Fatorial \u00E9 ".concat(ex1));
            break;
        case 2:
            var ex2 = (0, funcoes_1.calcularExponente)();
            console.log("A Exponencia\u00E7\u00E3o \u00E9 ".concat(ex2));
            break;
        case 3:
            var ex3 = (0, funcoes_1.calcularPorcentagem)();
            console.log("A Porcentagem \u00E9 ".concat(ex3));
            break;
        case 4:
            var ex4 = (0, funcoes_1.calcularTriangulo)();
            console.log("A \u00C1rea do Tri\u00E2gulo \u00E9 ".concat(ex4));
            break;
        case 5:
            console.log("Fim.");
            break;
    }
} while (opcao != 5);
