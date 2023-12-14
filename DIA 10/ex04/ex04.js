let numeros = []

let numeroI = parseInt(prompt('Insira um numero'))
numeros [0] = -1
numeros [1] = numeroI

for (let posicao = 2; posicao < 10 ; posicao++){
    let fibonacci = numeros [(posicao - 1)] + numeros [(posicao -2)]
    numeros [posicao] = fibonacci
    
}

console.log(`A sequência Fibonacci com 10 números do número inserido é de: ${numeros}.`)