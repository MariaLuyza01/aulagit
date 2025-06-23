let n = Number(prompt("digite quantos termos da sequencia de fibonacci deseja:"));

let a = 1, b = 1;
console.log(a);
console.log(b);

for(let i = 3; i <= n; i++) {
  let proximo = a + b;
  console.log(proximo);
  a = b;
  b = proximo;
}

