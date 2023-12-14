let nomes = []
let notas = []
let posicao = 0
let condicao = true


while (condicao) {
    let nomeAluno = prompt('Nome do aluno')
    let notaAluno = Number(prompt('Nota do aluno'))
    nomes [posicao] = nomeAluno
    notas [posicao] = notaAluno
    posicao++

    let desejaContinuar = prompt('Para incerir outro aluno digite 1, se não digite 2')
    if (desejaContinuar != 1){
        condicao = false
    }
}

let totalAlunos = nomes.length
var somaNotas = 0
for (let posicao = 0; posicao < totalAlunos; posicao ++){
    somaNotas += notas[posicao]
    
}
let mediaNotas = somaNotas / totalAlunos

for (let posicao = 0; posicao < totalAlunos; posicao ++){
    console.log(`${nomes[posicao]} tirou nota ${notas[posicao]}`)
}


console.log(`A soma de todas as notas é de ${somaNotas}.`)
console.log(`A média das notas é de ${mediaNotas}.`)
