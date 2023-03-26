"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularAreaTriangulo = exports.calcularPorcentagem = exports.calcularExponenciacao = exports.calcularFatorial = void 0;
function calcularFatorial(valor) {
    var i, fat;
    fat = 1;
    for (i = valor; i > 0; i--) {
        fat = fat * i;
    }
    return fat;
}
exports.calcularFatorial = calcularFatorial;
function calcularExponenciacao(base, expoente) {
    var i, res;
    res = 1;
    for (i = 1; i <= expoente; i++) {
        res = res * base;
    }
    return res;
}
exports.calcularExponenciacao = calcularExponenciacao;
function calcularPorcentagem(valor, porcetagem) {
    return (valor * porcetagem) / 100;
}
exports.calcularPorcentagem = calcularPorcentagem;
function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}
exports.calcularAreaTriangulo = calcularAreaTriangulo;
