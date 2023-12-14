let numeros = []
let numerosI = []

for (let posicao = 0; posicao < 5 ; posicao++){
    let nInserido = parseInt(prompt('Você ira inserir um total de 5 numeros. Vamos começar, qual é o ' + (posicao + 1) + 'º número?'))
    numeros [posicao] = nInserido
    
}

console.log('Entrada -> ' + numeros)
let uPosicao = 4

for (let posicao = 0; posicao < 5 ; posicao++){
    numerosI [posicao] = numeros [uPosicao]
    uPosicao -- 
}

console.log('Saída -> ' + numerosI)
