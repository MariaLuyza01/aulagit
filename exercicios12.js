const prompt = require("prompt-sync")();


let usuario, senha;

do{
   usuario = prompt("digite o nome de usuario:");
   senha = prompt("digite a senha:");
   if (usuario === senha){
     console.log("erro, a senha nao pode ser igual ao nome do usuario.");
   }
}while (usuario === senha);
console.log("cadastro realizado com sucesso!");
