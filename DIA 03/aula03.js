//Declaração das variáveis
let nome = ''
let altura = 0
let idade = 0
let peso = 0


/*teste
let nome = 'Danillo'
let altura = 1.76
let idade = 28
let peso = 82
*/

//Solicitando informações do usuário
nome = prompt('Digite sue nome:')
altura = Number(prompt('Digite sua altura:'))
idade = Number(prompt('Digite sua idade:'))
peso = Number(prompt('Digite seu peso:'))

//Calculo do ano de nascimento
let anoNasc = 2023 - idade
console.log('voce tem ' +anoNasc + ' de idade')

//Calculo do IMC
let IMC = peso / (altura*altura)
console.log(`Seu IMC é de ${IMC}`)

//exibindo msg
console.log(`Olá ${nome}, você tem ${idade} anos, nasceu em ${anoNasc}, tem ${altura} de altura, pesa ${peso}kg, seu IMC é ${IMC}kg/m2`)
