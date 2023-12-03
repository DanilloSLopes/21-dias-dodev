//Criando as variaveis
const temFome = prompt('Você esta com fome? (s/n)')
const temDinheiro = prompt('Você tem dinheiro? (s/n)')
const restaurante = prompt('O restaurante está aberto? (s/n)')


/*teste
let fome = 'sim'
let money = 'sim'
let restaurante = 'não'
*/


if (temFome === "n" || temDinheiro === 'n'){
    console.log('Hoje a janta será em casa')
} else if(temDinheiro === 's' && restaurante === 's'){
    console.log('Hoje a janta será no seu restaurante preferido')
} else {
    console.log('Peça um delivery!')
} 
