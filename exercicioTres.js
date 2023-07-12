//exercicio 3

let prompt = require("prompt-sync")();

let x = parseInt(prompt("Digite o número de X: ")); //parseInt: converte a reposta em um numero em inteiro

if (x > 0) {
  console.log("O número é positivo");
} else if (x < 0) {
  console.log("O número é negativo");
} else {
  console.log("O número inserido é Zero");
}