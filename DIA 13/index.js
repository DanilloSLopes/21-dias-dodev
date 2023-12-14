class Aluno{
    nome
    idade
    areaAtuacao
    constructor(nome, idade){
        this.nome = nome  
        this.idade = idade
    }
//quando estou entro da clase, não preciso escrever a palavra function para criar uma função, sempre que eu criar um nome e abrir parentese
//continução de cima: ele vai criar uma function
    apresentar(){
        console.log(`Olá, meu nome é: ${this.nome}, minha idade é ${this.idade}, minha área de atuação é ${this.areaAtuacao}`)
    }

}
console.log('---------Cadastro de alunos---------')
let alunoUm = new Aluno('Giovanne', 23)

//caso queira deifinir uma area de atuação posteriormente uso o comando:
alunoUm.areaAtuacao = 'Back-end'
let alunos = []
let continuar = true
let indexAluno = 0

while (continuar){
    let nome = prompt('Insira o nome do aluno')
    let idade = parseInt(prompt('Insira a idade do aluno'))
    let aluno = new Aluno(nome, idade)

    let areaAtuacao = prompt('Insira área de atuação, caso tenha')
    aluno.areaAtuacao = areaAtuacao

    alunos[indexAluno] = aluno

    let desejaContinuar = prompt('Insira 1 caso queira cadastrar um novo aluno')
    if (desejaContinuar != 1){
        continuar = false
    } else {
        indexAluno ++
    }
}