export {};
import { calcularFatorial, calcularExponenciacao, calcularPorcentagem, calcularAreaTriangulo } from './funcoes';
let opcao, v1, v2, res: number;
let teclado = require('prompt-sync')(); 
do{
    console.log("\n\n1 - Calcular fatorial");
    console.log("2 - Calcular exponenciação");
    console.log("3 - Calcular porcentagem");
    console.log("4 - Calcular área do triângulo")
    console.log("5 - Sair");
    console.log("Informe a opção: ");
    opcao = teclado();
    opcao = Number(opcao);
    switch(opcao){
        case 1:
            console.log("Informe o valor: ");
            v1 = teclado();
            res = calcularFatorial(Number(v1));
            //NO CASO NO PROGRAMA O RETURN VAI SER Q FOR SALVO DEPOIS Q O IF DE CRIAR NO BANCO DE DADOS FOR CONCLUIDO
            console.log(`O fatorial do valor informado é ${res}`);
            break;
        case 2:
            console.log("Informe o primeiro valor: ");
            v1 = teclado();
            console.log("Informe o segundo valor: ");
            v2 = teclado();
            res = calcularExponenciacao(Number(v1), Number(v2));
            console.log(`O resultado da exponenciação é ${res}`);
            break;
        case 3:
            console.log("Informe o valor: ");
            v1 = teclado();
            console.log("Informe a porcentagem: ");
            v2 = teclado();
            res = calcularPorcentagem(v1, v2);
            console.log(`O valor da porcentagem é: ${res}`);
            break;
        case 4:
            console.log("Informe a base: ");
            v1 = teclado();
            console.log("Informe o expoente: ");
            v2 = teclado();
            res = calcularAreaTriangulo(v1, v2);
            console.log(`A área do triângulo é: ${res}`);
            break;
    }
}while(opcao != 5);