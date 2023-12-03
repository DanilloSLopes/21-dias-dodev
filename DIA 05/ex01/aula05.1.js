//Variáveis para o teste
let num1
let num2
let pergunta
let somar
let multiplicar

/*teste
let num1 = 10
let num2 = 15
let pergunta = "multiplicar"
*/

//Informações do usuário e operações matematicas
num1 = Number(prompt('Digite um numero'))
num2 = Number(prompt('Digite outro numero'))
pergunta = prompt('você gostaria de somar os numeros ou multiplicar?')
somar = num1 + num2
multiplicar = num1 * num2

//Condição
switch(pergunta){
    case 'somar':
        window.alert(`${num1} + ${num2} = ${somar}`)
        break
    case 'multiplicar':
        window.alert(`${num1} x ${num2} = ${multiplicar}`)
        break
    default:
        window.alert('Digite corretamente a operação')
}
