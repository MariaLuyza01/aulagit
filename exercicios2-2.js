const prompt = require("prompt-sync")();



let data = (prompt("digite a data no formato dd/mm/aaaa:"));
let partes = data.split("/")

let dia = partes [0];
let mes = partes [1];
let ano = partes [2];

let meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

let mesPorExtenso = meses[Number(mes) - 1]

console.log('${dia} de ${mesPorExtenso} de ${ano}')

