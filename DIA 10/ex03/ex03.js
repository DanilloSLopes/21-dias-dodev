let numeros = []
let numerosI = []

const quantidade = parseInt(prompt('Quantos números você deseja inserir?'))
for (let posicao = 0; posicao < quantidade ; posicao++){
    let nInserido = parseInt(prompt('Você irá inserir um total de ' + quantidade + ' números. Vamos começar, qual é o ' + (posicao + 1) + 'º?'))
    numeros [posicao] = nInserido
    
}

console.log('Entrada -> ' + numeros)
let uPosicao = quantidade -1

for (let posicao = 0; posicao < quantidade ; posicao++){
    numerosI [posicao] = numeros [uPosicao]
    uPosicao -- 
}

console.log('Saída -> ' + numerosI)
