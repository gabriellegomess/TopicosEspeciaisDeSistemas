let teclado = require("prompt-sync")();

export function calcularFatorial(): number{
    console.log("Informe o número: ");
    let num:number = teclado();
    num = Number(num);
    
    let i = 1;
    let resultado = 1;
    for(i = 1; i <= num; i++){
        resultado *= i;
    }

    return resultado;
    
}

export function calcularExponente(): number{
    console.log("Informe a base: ");
    let base: number = teclado();
    base = Number(base);
    console.log("Informe o exponente: ");
    let expo:number = teclado();
    expo = Number(expo);

    return base ** expo;
    

}

export function calcularPorcentagem(): number{
    console.log("Informe o valor que deseja: ");
    let valor: number = teclado();
    console.log("Informe a porcentagem: ");
    let porc: number = teclado();

    valor = Number(valor);
    porc = Number(porc);

    return (porc * valor) / 100;

}

export function calcularTriangulo():number{
    console.log("Informe a base do triângulo: ");
    let base: number = teclado();
    console.log("Informe a altura do triângulo: ");
    let altura: number = teclado();

    base = Number(base);
    altura = Number(altura);

    return (base * altura) / 2;

}

