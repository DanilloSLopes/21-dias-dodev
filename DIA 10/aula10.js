let nomes = []
let continuar = true
let posicaoDoArray = 0

while(continuar){
    let nomeInserido = prompt('Insira um nome')
    nomes [posicaoDoArray] = nomeInserido

    let desejaContinuar = prompt('Se deja inserir mais algum nome digite 1')
    if(desejaContinuar != 1){
        continuar = false
    }
    posicaoDoArray++
}

console.log(nomes)