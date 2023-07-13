//exercicio 4
let prompt = require("prompt-sync")();

let numero = parseInt(prompt("Digite um número: "));

if (numero  % 2 == 0) {
  console.log("Número digitado é PAR!");
} else {
  console.log("Número digitado é IMPAR!");
}