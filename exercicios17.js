const prompt = require("prompt-sync")();


let pares = 0;
let impares = 0;

for (let i = 0; i < 10; i++) {
   let num = Number(prompt("digite um numero inteiro:"));
   if (num % 2 == 0) {
      pares++;
   }else  {
      impares++;
   }
}
console.log("quantidade de numeros pares:" + pares);
console.log("quantidade de numeros impares:" + impares);

