/* let i: number;

let valor: number;

valor = 8;

if(valor >= 10){
    console.log("É maior que 10");
}
else{
    if(valor < 2){
        console.log("O valor é menor que 2")
    }
    else{
        console.log("Entre 2 e 9");
    }
}

for(i = 0; i < 10; i++){
    console.log("O valor do contador é %d", i);
}

console.log("While");

 i = 0;
 while(i < 10){
    console.log("O valor do contador é %d", i);
    i++;
 }

console.log("Do While");

i = 0
do{
    console.log("O valor do contador é %d", i);
    i++;
}while(i < 10);

//idade = 10;
//console.log(idade); */

import {calcularQuadrado, calcularSoma} from "./funcoes";

//let x: number;
//let resultado : number;
//resultado = calcularQuadrado(5);
//console.log(resultado);
//a variavel recebe o resultado da função

//criar variavel com qualquer nome
//usa a função do pacote de pegar leitura do teclado
//a variavel recebe o dado de entrada

let x, y: number;

let teclado = require("prompt-sync")(); //pegar a função daquele pacote que a gente baixou (pegar o valor do teclado do usuário)

console.log("Informe primeiro valor: ");
x = teclado();

console.log("Informe o segundo valor: ");
y = teclado();

//SEMPRE Q FAZ UMA FUNÇÃO LER O TECLADO O NGC SEMPRE LE COMO STRING E NÃO NUMÉRICO
//Coloca x e y como sendo numero e guarda na propria variavel (pega o x converte o x e guarda no proprio x)
x = Number(x);
x = Number(y);
//console.log(calcularQuadrado(x));

console.log(calcularSoma(x, y));
