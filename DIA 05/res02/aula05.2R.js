//CRIANDO VARIÁVEIS
let valor
let quantidade
let opcao = prompt('Bem vindo ao DoDev-thru, você deseja: ' + '\n1 - abastecer com gasolina; \n2 - abastecer com álcool; \n3 - calibrar os pneus')

//CRIANDO SWITCHCASE
switch(opcao){
    case "1":
        valor = parseInt(prompt('Digite quanto em reais deseja abastecer'))
        quantidade = valor / 5
        console.log('Foram abastecidos ' + quantidade + 'L de gasolina')
        break
    case "2":
        valor = parseInt(prompt('Digite quanto em reais deseja abastecer'))
        quantidade = valor / 3
        console.log('Foram abastecidos ' + quantidade + 'L de álcool')
        break
    default:
        console.log('Pneus calibrados com sucesso')
}