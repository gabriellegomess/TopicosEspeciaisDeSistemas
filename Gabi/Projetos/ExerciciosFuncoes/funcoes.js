"use strict";
exports.__esModule = true;
exports.calcularTriangulo = exports.calcularPorcentagem = exports.calcularExponente = exports.calcularFatorial = void 0;
var teclado = require("prompt-sync")();
function calcularFatorial() {
    console.log("Informe o número: ");
    var num = teclado();
    num = Number(num);
    var i = 1;
    var resultado = 1;
    for (i = 1; i <= num; i++) {
        resultado *= i;
    }
    return resultado;
}
exports.calcularFatorial = calcularFatorial;
function calcularExponente() {
    console.log("Informe a base: ");
    var base = teclado();
    base = Number(base);
    console.log("Informe o exponente: ");
    var expo = teclado();
    expo = Number(expo);
    return Math.pow(base, expo);
}
exports.calcularExponente = calcularExponente;
function calcularPorcentagem() {
    console.log("Informe o valor que deseja: ");
    var valor = teclado();
    console.log("Informe a porcentagem: ");
    var porc = teclado();
    valor = Number(valor);
    porc = Number(porc);
    return (porc * valor) / 100;
}
exports.calcularPorcentagem = calcularPorcentagem;
function calcularTriangulo() {
    console.log("Informe a base do triângulo: ");
    var base = teclado();
    console.log("Informe a altura do triângulo: ");
    var altura = teclado();
    base = Number(base);
    altura = Number(altura);
    return (base * altura) / 2;
}
exports.calcularTriangulo = calcularTriangulo;
