const prompt = require("prompt-sync")();


let maior = 0;
let contador = 0;

while (contador < 10) {
 let num = Number(prompt("digite um numero:"));
  contador++;
 if (num > maior) {
   maior = num;
 } 
}
console.log("o maior numero digitado foi:", maior);



