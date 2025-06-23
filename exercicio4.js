const prompt = require("prompt-sync")();
let salarioAtual = Number(prompt("digite o valor do salario atual:"));
let percentualReajuste = Number(prompt("digite o percentual do reajuste (%):"));

let salarioAtualizado = salarioAtual + (salarioAtual * percentualReajuste / 100);


console.log("O novo salario é: R$ " + salarioAtualizado.toFixed(2));
