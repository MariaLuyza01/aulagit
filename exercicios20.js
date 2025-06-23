const prompt = require("prompt-sync")();


let lado = Number(prompt("digite o tamanho  do lado do quadrado (1 a 20):"));
for (let i = 1; i <= lado; i ++) {
  let linha = "";
  for (let j = 1; j <= lado; j++) {
    if (i === 1 || i === lado || j === 1 ||
    j === lado){
      linha += "*";
    } else {
      linha += "";
    }
  }
    console.log(linha);
}




