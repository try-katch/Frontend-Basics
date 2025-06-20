/* 1. Desconto progressivo
Peça o valor de uma compra:

Se for acima de R$100, aplique 15% de desconto

Se for entre R$50 e R$100, aplique 10%

Se for abaixo de R$50, aplique 5%

Mostre o valor final com desconto.



let value = Number(prompt("Digite o valor da compra: "));
let discount = 0;
let percentual = 0;

if (value > 0) {

    if (value > 100) {
        discount = value * 0.15;
        percentual = 15
    } else if (value >= 50 && value <= 100) {
        discount = value * 0.10;
        percentual = 10
    } else if (value < 50) {
        discount = value * 0.05;
        percentual = 5
    }

} else {
    alert("You must type a value bigger than 0...");
}

let finalValue = value - discount;

alert("The final value with the discount of " + percentual + "% is: R$" + finalValue.toFixed(2))



/*

2. Verificação de triângulo
Peça três valores e diga se podem formar um triângulo (a soma de dois lados precisa ser maior que o terceiro, pra todos os lados).


let sideA = Number(prompt("Digite o lado A do triângulo: "));
let sideB = Number(prompt("Digite o lado B do triângulo: "));
let sideC = Number(prompt("Digite o lado C do triângulo: "));
let sumAB = sideA + sideB;
let sumAC = sideA + sideC;
let sumBC = sideC + sideB;
let triangle = false;

if(sumAB > sideC && sumAC > sideB && sumBC > sideA) {
    triangle = true;
} 

let result = triangle ? "É um triângulo." : "Não é um triângulo.";

alert(result);

/*
3. Relógio de 24h para 12h
Peça uma hora entre 0 e 23 e:

Converta para formato de 12 horas

Adicione se é AM ou PM

Exemplo: 13 → "1 PM" */

let hour = parseInt(prompt("Insert a hour in interger (hh): "));
let converterFactor = 12;
let time = hour;
let formatTime; 

if(hour >= 0 && hour <= 23) {
    if(hour == 0) {
        time = 12;
        formatTime = "It's " + time + " AM."
    } else if(hour < 12) {
        formatTime = "It's " + time + " AM."
    } else if (hour == 12) {
        formatTime = "It's " + time + " PM."
    }
    else {
        time -= converterFactor;
        formatTime = "It's " + time + " PM."
    } 

} else {
    formatTime = "You must time a valid time..."
}

alert(formatTime)




