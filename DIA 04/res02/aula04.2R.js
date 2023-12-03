//Criando as variaveis
let nome 
let idade 
let temCarta = false
let temCarro = false


/*teste
let nome = 'Danillo'
let idade = 18
let carta = 's'
let carro = 'n'
*/

//Pergunta para o usuário
nome = prompt('Insira seu nome:')
idade = Number(prompt("Insira sua idade"))
let opcaoCarta = prompt('Você tem carta de motorista? (s/n)')
if(opcaoCarta == 's'){
    temCarta = true
}

let opcaoCarro = prompt('Você tem carro? (s/n)')
if (opcaoCarro == 's'){
    temCarro = true
}

//Mensagem no console
if(idade < 18 || !temCarta){
    console.log(`${nome}, você não pode dirigir.`)
} else if(idade >= 18 && temCarta && !temCarro){
    console.log(`${nome}, você pode dirigir mas não tem carro.`)
} else {
    console.log(`${nome}, você será o motorista da rodada.`)
}