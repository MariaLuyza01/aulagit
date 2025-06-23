const prompt = require("prompt-sync")();

const PI = 3.1416;
const custoPorMetroQuadrado = 100;

 let raio = Number(prompt("digite o raio da lata (em metros):" ));
let altura = Number(prompt("digite a altura da lata (em metros"));

 let areaLateral = 2 * PI * raio * altura;
 let areaTampas = 2 * PI * raio * raio;
 let areaTotal = areaLateral + 2 * areaTampas;
 let custo = areaTotal * custoPorMetroQuadrado;
  
console.log("o custo da lata e de: R$" + custo.toFixed(2));
