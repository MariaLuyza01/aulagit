const prompt = require("prompt-sync")();


let num1 = Number(prompt("digite o primeiro numero:"));
let num2 = Number(prompt("digite o segundo numero:"));

let menor = Math.min (num1, num2);
let maior = Math.max (num1, num2);

 let soma = 0;
for (let i = menor + 1; i < maior ; i ++){
  console.log(i)
   soma = soma + i;

}
console.log ("soma dos numeros:", soma);


