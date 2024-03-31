/*
    Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, 
    mais  uma  comissão  também  fixa  para  cada  carro  vendido  e  mais  5%  do  valor
    das vendas  por  ele  efetuadas.  Escrever  um  programa  que  leia  o  número 
    de  carros  por  ele vendidos,  o  valor  total  de  suas  vendas,  o  salário  
    fixo  e  o  valor  que  ele  recebe  por  carro vendido.

    Calcule e escreva o salário final do vendedor(0,5).
    Qual o objetivo desteexercício?
    O objetivo deste exercício é praticar o uso de variáveis, 
    entrada de dados, cálculos matemáticos e saída de resultados em um programa simples. 
    ele visa demonstrar como calcular o sálario final de um vendedor de carros usados com bases
    em diferentes componentes.
*/


const numCarrosVendidos = 10; 
const valorTotalVendas = 50000; 
const salarioFixo = 2000; 
const comissaoPorCarro = 500; 

const comissaoTotal = numCarrosVendidos * comissaoPorCarro;

const comissaoPorVendas = valorTotalVendas * 0.05;

const salarioFinal = salarioFixo + comissaoTotal + comissaoPorVendas;

console.log("Salário final do vendedor: R$", salarioFinal.toFixed(2));
