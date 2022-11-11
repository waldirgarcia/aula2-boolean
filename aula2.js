
/* Aplicando a ciência, boolean, saber se o número é par, aplicando  a regra resto da divisão % 2 ===0; 
OBS: 
um ""=""  para atribuição
""=="" para converter texto em numero e retornar númerico
Recomendado utilizar para comparar utilizar os "==="  */

const numero = 8;

/*se o número é divisivel por 2*/

const isNumeroPar = numero % 2 === 0;

if(numero === 0){
    console.log('Número imparcial');

}else if(isNumeroPar){
console.log('É um número par');

}else {
console.log('É impar');
}
