const prompt = require("prompt-sync")();

const milimetroPorPolegada = 25.4;

let farenheit = Number(prompt("digite a temperatura em farenheit:"));
let celsius = (5 * farenheit - 160) / 9;

console.log("temperatura em celsius: " + celsius.toFixed(2));

let polegadas = Number(prompt("digite a quantidade de chuva em polegadas:"));
 let milimetros = polegadas * milimetroPorPolegada;
 console.log("quantidade de chuva em milimetros:" + milimetros.toFixed(2));

