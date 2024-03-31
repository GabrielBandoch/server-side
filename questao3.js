/*
Faça um programapara ler: quantidade atual em estoque, quantidade máxima em estoque equantidade  
mínima  em  estoque  de  um  produtocontida  em  um  array  bidimensional  (como uma  tabela)ou  
se  preferir  use  uma  estrutura  de  objeto  (chave/valor). 
Calculee  escrevaa quantidade  média.Se  a  quantidade  em  estoque  for  maior  ou  iguala  
quantidade  média escrever  a  mensagem  'Não  efetuar compra',  
Qual o objetivo deste exercício?
O objetivo deste exercício é calcular a quantidade média de um produto com base na quantidade atual, 
máxima e mínima em estoque, e decidir se é necessário efetuar uma compra com base nessa média.

*/
const produto = {
    quantidadeAtual: 15, 
    quantidadeMaxima: 100, 
    quantidadeMinima: 20 
};

const quantidadeMedia = (produto.quantidadeMaxima + produto.quantidadeMinima) / 2;

if (produto.quantidadeAtual >= quantidadeMedia) {
    console.log("Não efetuar compra");
} else {
    console.log("Efetuar compra");
}
