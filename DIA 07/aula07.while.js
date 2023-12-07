let condicao = true
while(condicao) {
    let idade = Number(prompt('Insira sua idade'))
    if (idade < 18){
        console.log('Você é menor de idade')
        condicao = false
    }
}

console.log('Acabou o while')