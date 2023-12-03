//Criando as variaveis
let nome = ''
let idade = 0
let carta = ''
let carro = ''


/*teste
let nome = 'Danillo'
let idade = 18
let carta = 's'
let carro = 'n'
*/

//Pergunta para o usuário
nome = prompt('Insira seu nome:')
idade = Number(prompt("Insira sua idade"))
carta = prompt('Possui carteira de motorista? (s/n)')
carro = prompt('Tem carro amigão? (s/n)')


if(idade < 18 || carta === 'n'){
    console.log(`${nome}, você não pode dirigir.`)
} else if(idade >= 18 && carta === 's'){
    if(carro === 'n'){
        console.log(`${nome}, você pode dirigir mas não tem carro.`)
    } else {
        console.log(`${nome}, você será o motorista da rodada.`)
    }
}