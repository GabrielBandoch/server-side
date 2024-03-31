/*
Supondo  que  a  população  de  um  país  A  seja  da  ordem  de  80000  habitantes  
com  uma  taxa anual de crescimento de  3% e que a população de B seja 200000 
habitantes com uma taxa de  crescimento  de  1.5%.Faça  um  programa  que  
calcule  e  escreva  o  número  de  anos necessários  para  que  a  população  
do  país  A  ultrapasse  ou  iguale  a  população  do  país  B, mantidas as taxas 
de crescimento.
Qual o objetivo deste exercicio?

O objetivo deste exercício é praticar a implementação de um programa simples para resolver 
um problema de crescimento populacional e calcular o número de anos necessários para que a 
população de um país ultrapasse ou iguale a população de outro país, considerando taxas de 
crescimento diferentes para cada país.

*/

let populacaoA = 80000;
let populacaoB = 200000;

const taxaCrescimentoA = 0.03;
const taxaCrescimentoB = 0.015;

let anos = 0;

while (populacaoA < populacaoB) {
    populacaoA *= (1 + taxaCrescimentoA); 
    populacaoB *= (1 + taxaCrescimentoB); 
    anos++; 
}

console.log(`Serão necessários ${anos} anos para que a população do país A ultrapasse ou iguale a população do país B.`);
