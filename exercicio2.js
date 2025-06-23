const prompt = require("prompt-sync")();
let valorEmReais = Number(prompt("digite a cotacao do dolar:"));
let valorEmDolar = Number(prompt("digite o valor do produto em dolar:"));


let valorConvertido = valorEmReais * valorEmDolar;

console.log("O valor do produto em reais é: R$ " + valorConvertido.toFixed(2));

