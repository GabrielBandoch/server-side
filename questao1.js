/*
O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem
do distribuidor e dos impostos (aplicados ao custo de fábrica). 
Supondo que o percentual do distribuidorseja  de  28%  e  os  impostos  de  45%,  
escrevaum  programa  para  ler  o  custo  de fábrica de um carro, 
calcular,mostrar o resultado de cadacálculo e escrever o custo final ao consumidor(0,5).

Qual o objetivo deste exercício?
O objetivo do exercicio proposto é praticar conceitos basicos de programação,
alem disso, ele nos desafia a criar uma aplicação básica para calcular o custo
final ao consumidor de um carro com base no custo de fabrica, porcentagem e 
nos impostos. 
*/

const percentualDistribuidor = 0.28;
const percentualImpostos = 0.45;

const custoFabrica = 32500.90;

const custoDistribuidor = custoFabrica * percentualDistribuidor;
const custoImpostos = custoFabrica * percentualImpostos;

const custoFinalConsumidor = custoFabrica + custoDistribuidor + custoImpostos;

console.log("Custo de fábrica: R$", custoFabrica.toFixed(2));
console.log("Custo do distribuidor: R$", custoDistribuidor.toFixed(2));
console.log("Custo dos impostos: R$", custoImpostos.toFixed(2));
console.log("Custo final ao consumidor: R$", custoFinalConsumidor.toFixed(2));