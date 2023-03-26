"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var funcoes_1 = require("./funcoes");
var opcao, v1, v2, res;
var teclado = require('prompt-sync')();
do {
    console.log("\n\n1 - Calcular fatorial");
    console.log("2 - Calcular exponenciação");
    console.log("3 - Calcular porcentagem");
    console.log("4 - Calcular área do triângulo");
    console.log("5 - Sair");
    console.log("Informe a opção: ");
    opcao = teclado();
    opcao = Number(opcao);
    switch (opcao) {
        case 1:
            console.log("Informe o valor: ");
            v1 = teclado();
            res = (0, funcoes_1.calcularFatorial)(Number(v1));
            console.log("O fatorial do valor informado \u00E9 ".concat(res));
            break;
        case 2:
            console.log("Informe o primeiro valor: ");
            v1 = teclado();
            console.log("Informe o segundo valor: ");
            v2 = teclado();
            res = (0, funcoes_1.calcularExponenciacao)(Number(v1), Number(v2));
            console.log("O resultado da exponencia\u00E7\u00E3o \u00E9 ".concat(res));
            break;
        case 3:
            console.log("Informe o valor: ");
            v1 = teclado();
            console.log("Informe a porcentagem: ");
            v2 = teclado();
            res = (0, funcoes_1.calcularPorcentagem)(v1, v2);
            console.log("O valor da porcentagem \u00E9: ".concat(res));
            break;
        case 4:
            console.log("Informe a base: ");
            v1 = teclado();
            console.log("Informe o expoente: ");
            v2 = teclado();
            res = (0, funcoes_1.calcularAreaTriangulo)(v1, v2);
            console.log("A \u00E1rea do tri\u00E2ngulo \u00E9: ".concat(res));
            break;
    }
} while (opcao != 5);
