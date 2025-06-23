const prompt = require("prompt-sync")();
let horasTrabalhadas = Number(prompt("digite o numero de horas trabalhadas no mes:"));
let valorHora = Number(prompt("digite o valor da hora trbalhada:"));

let salarioBruto = horasTrabalhadas * valorHora;

let descontoVt = salarioBruto * 0.06;

salarioComDesconto = salarioBruto - descontoVt;


console.log("O valor do salario com desconto é: R$ " + salarioComDesconto.toFixed(2));

