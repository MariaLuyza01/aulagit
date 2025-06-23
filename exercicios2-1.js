const prompt = require("prompt-sync")();



let salario = Number(prompt("digite seu salario:"));
let reajuste = 0;

if (salario <= 280) {
  reajuste = salario * 0.2;
}else if (salario <= 700)  {
  reajuste = salario * 0.15;
}else if (salario <= 1500) {
  reajuste = salario * 0.10;
}else {
  reajuste = salario * 0.05;
}
  let novoSalario = salario + reajuste;
console.log("salario antes do reajuste: R$ " + salario.toFixed(2));
console.log("valor do aumento: R$ " + reajuste.toFixed(2));
console.log("novoSalario: R$ " +novoSalario.toFixed(2));



