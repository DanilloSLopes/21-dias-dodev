let homem = 0
let mulheresAcimaDe7 = 0
let contador = 1
let somNotas = 0
let maiorNotaH = 0

while (contador <= 10) {
    let nota = Number(prompt('Qual foi a nota do ' + contador +'º candidato'))
    let sexo = prompt('Qual é o seu sexo (m/f)')
    if (sexo == 'm'){
        if (nota > maiorNotaH){
            maiorNotaH = nota
        }  
        homem++
    }      
    if (sexo == 'f' && nota > 7){
        mulheresAcimaDe7 ++
    }
    contador ++   
    somNotas += nota 
}
console.log(`A média geral das notas é ${somNotas / contador}.`)
console.log(`O total de homens na pesquisa foram ${homem}.`)
console.log(`${mulheresAcimaDe7} mulheres tiraram mais que 7!`)
console.log(`A maior nota foi entre os homens foi:${maiorNotaH}.`)
