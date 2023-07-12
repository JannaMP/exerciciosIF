//exercicio 3

let prompt = require("prompt-sync")();

let x = parseInt(prompt("Digite o número de X: ")); //parseInt: converte a reposta em um numero em inteiro

if (x > 0) {
  console.log("Positivo");
} else if (x < 0) {
  console.log("Negativo");
} else {
  console.log("Digite um número válido!");
}