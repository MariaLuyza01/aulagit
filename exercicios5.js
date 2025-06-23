const prompt = require("prompt-sync")();
let anos = Number(prompt("digite quantos anos voce quer calcular:"));


let batimentos = anos * 365 * 24 * 60 * 60;


console.log("o coracao batera aproximadamente" + batimentos + "vezes.");
