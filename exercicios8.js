const prompt = require("prompt-sync")();

let somaIdade = 0;
let somaPeso = 0;

 for (let i = 1; i <= 3; i++) {
   let nome =(prompt("digite o nome da pessoa "+ i + " :"));
   let idade = Number(prompt("digite a idade da pessoa "+ i + " :" ));
   let peso = Number(prompt("digite o peso da pessoa "+ nome + " :"));
   somaIdade += idade;
   somaPeso += peso;
  
 }
let mediaIdade = somaIdade / 3;
let mediaPeso = somaPeso / 3;

console.log("idade media:" + mediaIdade.toFixed(2));
console.log("peso medio:" + mediaPeso.toFixed(2));

