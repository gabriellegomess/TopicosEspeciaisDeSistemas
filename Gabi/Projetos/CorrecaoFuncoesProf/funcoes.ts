export function calcularFatorial(valor: number): number{
    let i, fat: number;
    fat = 1;
    for(i = valor; i > 0; i--){
        fat = fat * i;
    }
    return fat;
}

export function calcularExponenciacao(base: number, expoente: number): number{
    let i, res: number;
    res = 1;
    for(i = 1; i <= expoente; i++){
        res = res * base;
    }
    return res;
}

export function calcularPorcentagem(valor: number, porcetagem: number): number{
    return (valor * porcetagem) / 100;
}

export function calcularAreaTriangulo(base: number, altura: number): number{
    return (base * altura) / 2;
}