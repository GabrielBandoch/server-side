/*
Escreva um programaque permita a leitura dosnomes de 10 pessoas e armazeneos nomes lidos  emum array.  
Após  isto,  o programadeve  permitir  a  leitura  de  mais de  umnome qualquer depessoa  e 
escrever  a  mensagem  ACHEI,  se  o  nome  estiver  entre  os  10  nomes lidos anteriormente 
(armazenadosnoarray), ou NÃO ACHEI caso contrário(0,75).
Qual o objetivo desteexercício?
O objetivo deste exercício é permitir que o usuário insira os nomes de 10 pessoas e, 
em seguida, verificar se um nome específico fornecido está entre os nomes previamente armazenados no array.
*/

const readlineSync = require('readline-sync');
let nomes = [];

function lerNomes() {
  for (let i = 0; i < 10; i++) {
    const nome = readlineSync.question(`Digite o nome da pessoa ${i + 1}: `);
    nomes.push(nome);
  }
}

function buscarNome() {
  const nomeBusca = readlineSync.question('Digite o nome que deseja buscar: ');

  if (nomes.includes(nomeBusca)) {
    console.log('ACHEI');
  } else {
    console.log('NÃO ACHEI');
  }
}

lerNomes();
buscarNome();
