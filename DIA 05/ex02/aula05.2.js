let gasolina = 5
let alcool = 3
let calibrar = 'pneus calibrados com sucesso'

let opcao = Number(prompt('O que vai querer fazer? ' + '\n1: abastecer com gasolina \n2: abastecer com alcool \n3: calibrar pneu'))
    switch(opcao){
        case 1:
            let quantidadeG = Number(prompt('Quantos reais gostaria de colocar?'))
            let calcGasolina = quantidadeG / gasolina
            console.log(`Foi abastecido o total de ${calcGasolina} litros!`)
            break
        case 2:
            let quantidadeA = Number(prompt('Quantos reais gostaria de colocar?'))
            let calcAlcool = quantidadeA / alcool
            console.log(`Foi abastecido o total de ${calcAlcool} litros!`)
            break
        case 3:
            console.log(calibrar)
    }
 