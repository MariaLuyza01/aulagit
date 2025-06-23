const prompt = require("prompt-sync")();


let numero = Number(prompt("digite um numero de 0 a 10 para ver sua tabuada:"));
    console.log("tabuada de soma", + numero);
for (let i = 1; i <= 10; i++) {
   console.log(numero + "*" + i + "=" + (numero * i));
}

