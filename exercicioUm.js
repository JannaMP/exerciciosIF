//exercicio 1
let prompt = require("prompt-sync")(); // require: importa a "prompt-sync" que é uma biblioteca que permite fazer perguntas e receber respostas no terminal do Node.js.

let nome = prompt("Digite o nome do funcionário: ");
let cargo = prompt("Digite o cargo do funcionário: ");
let salario = parseFloat(prompt("Digite o salario do funcionário: ")); //parseFloat:  converte uma string em um número decimal de ponto flutuante


if (salario < 1000) {
  salario = salario * 1.1; // multiplicado por 10 em decimal 
}

console.log(`Nome: ${nome}`); // "template string" ou "string de modelo" 
console.log(`Cargo: ${cargo}`); // $:"interpolação" 
console.log(`Salario: ${salario.toFixed(2)}`); // tofixed eh o numero de casas que serao usadas no final do cod, nesse caso eh 2


