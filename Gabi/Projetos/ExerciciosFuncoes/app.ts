import { calcularFatorial, calcularExponente, calcularPorcentagem, calcularTriangulo } from "./funcoes";

let teclado = require("prompt-sync")();
let opcao: number;
do{
    console.log("\nEscolha a opção desejada");
    console.log("(1) Fatorial");
    console.log("(2) Exponenciação");
    console.log("(3) Porcentagem");
    console.log("(4) Área do Triângulo");
    console.log("(5) Sair");

    opcao = teclado();
    opcao = Number(opcao);

    switch(opcao){
        case 1: 
            let ex1: number = calcularFatorial();
            console.log(`O Fatorial é ${ex1}`);
        break;

        case 2: 
            let ex2: number = calcularExponente();
            console.log(`A Exponenciação é ${ex2}`);
            
        break;

        case 3:
            let ex3: number = calcularPorcentagem();
            console.log(`A Porcentagem é ${ex3}`);
           
        break;

        case 4: 
            let ex4: number = calcularTriangulo();
            console.log(`A Área do Triâgulo é ${ex4}`);
           
        break;

        case 5:
            console.log("Fim.");
        break;
    }
        

}while(opcao != 5)    