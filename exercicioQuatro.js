//exercicio 4
let prompt = require("prompt-sync")();

let x = parseFloat(prompt("Digite o número de X: "));

let numero = x % 2;

if (numero == 0) {
  console.log("Número digitado é PAR!");
} else {
  console.log("Número digitado é IMPAR!");
}