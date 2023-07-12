//exercicio 2
let prompt = require("prompt-sync")(); // require: importa a "prompt-sync" que é uma biblioteca que permite fazer perguntas e receber respostas no terminal do Node.js.

let salario = parseFloat(prompt("Digite o salario do funcionário: "));


if (salario < 500) {
  salario = salario * 1.3;
  console.log(`O Salário com aumento é: R$${salario.toFixed(2)}`);
} else {
  console.log(`Seu salário é de R$${salario}, voce nao tem direito ao reajuste salarial!`);
}

