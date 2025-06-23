const prompt = require("prompt-sync")();

let nota;

do {
   nota = Number(prompt("digite uma nota de 0 a 10:"));
   if (nota < 0 || nota > 10){
      console.log("nota invalida, digite novamente");

   }
}while (nota < 0 || nota > 10);
console.log("nota valida, sua nota e:" + nota);
