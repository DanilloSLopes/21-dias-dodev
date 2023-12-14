let modelos = []
let anos = []
let valores = []
let posicao = 0
let condicao = true


while (condicao) {
    let modeloCarro = prompt(`Nome do ${posicao +1}º carro`)
    let anoCarro = Number(prompt(`Ano do ${posicao +1}º carro`))
    let valorCarro = Number(prompt(`Valor do ${posicao +1}º carro`))
    modelos [posicao] = modeloCarro
    anos [posicao] = anoCarro
    valores [posicao] = valorCarro
    posicao++

    let desejaContinuar = prompt('Para inserir outro carro digite 1, se não digite 2')
    if (desejaContinuar != 1){
        condicao = false
    }
}

console.log('Carros cadastrados: ')
for (let posicao = 0; posicao < modelos.length; posicao ++){
    console.log(`${modelos[posicao]}, ${anos[posicao]} - Valor ${valores[posicao]}`)
}

for (let posicao = 0; posicao < modelos.length; posicao ++){
    for (j = 0; j < valores.length - posicao - 1; j++){
        if(valores[j] > valores[j + 1]){

            let modMaiorValor = modelos[j]
            modelos[j] = modelos[j + 1]
            modelos[j + 1] = modMaiorValor

            let anoMaiorValor = anos[j]
            anos[j] = anos[j + 1]
            anos[j + 1] = anoMaiorValor

            let maiorValor = valores[j]
            valores[j] = valores[j + 1]
            valores[j + 1] = maiorValor
        }
    }
}

console.log('Carros ordenados pelo preço:')
for (let posicao = 0; posicao < modelos.length; posicao ++){
    console.log(`${modelos[posicao]}, ${anos[posicao]} - Valor ${valores[posicao]}`)
}


