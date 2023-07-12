//exercicio 1
let prompt = require("prompt-sync")(); // require: importa a "prompt-sync" que é uma biblioteca que permite fazer perguntas e receber respostas no terminal do Node.js.

let nome = prompt("Digite o nome do funcionário: ");
let cargo = prompt("Digite o cargo do funcionário: ");
let salario = parseFloat(prompt("Digite o salario do funcionário: ")); //parseFloat:  converte uma string em um número decimal de ponto flutuante

aumento = salario * 0.1; // multiplicado por 10 em decimal 

if (salario < 1000) {
  salario = salario + aumento;
}

console.log(`Nome: ${nome}`); // "template string" ou "string de modelo" 
console.log(`Cargo: ${cargo}`); // $:"interpolação" 
console.log(`Salario: ${salario}`);


