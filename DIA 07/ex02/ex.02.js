let saldoTotal = 2000
let condicao = 1
let maiorValor = 0
let transacao = 0
let somValor = 0
console.log(`Seu saldo inicial é de ${saldoTotal}`)
let nome = prompt('Insira seu nome')
let cpf = prompt('Insira seu cpf sem . ou -')

do {
    let valor = Number(prompt(`Olá ${nome}, insira o valor desejado`))
    let operacao = prompt('Você gostaria de efetuar saque ou depósito? (s/d)')
    if (operacao == 's'){
        let saldo = saldoTotal - valor 
        if (saldo <= 0){
            console.log('[RECUSADO] Valor inválido, você excedeu o valor de saque')
            console.log(`Seu saldo atual é de R$${saldoTotal}`)
        } else if (valor < 0){
            console.log('[ERRO] impossível saque ou depósito de valor negativo')
            console.log(`Seu saldo atual é de R$${saldoTotal}`)
        } else {
            saldoTotal -= valor
            console.log(`[APROVADO] Seu saldo é de R$${saldoTotal}.`)
            transacao ++
            somValor += valor
            if (valor > maiorValor){
                maiorValor = valor
            }
        }
    } else {
        if (valor < 0){
            console.log('[ERRO] impossível saque ou depósito de valor negativo')
            console.log(`Seu saldo atual é de R$${saldoTotal}`)
        } else {
            saldoTotal += valor
            console.log(`[APROVADO] Seu saldo é de R$${saldoTotal}.`)
            transacao ++
            somValor += valor
            if (valor > maiorValor){
                maiorValor = valor
            }
        }
    }  
    condicao = Number(prompt('Se deseja continuar insira 1, se deseja para insira 2'))
} while (condicao == 1)

console.log('O maior valor inserido foi de R$' + maiorValor + '.')
console.log(`A média do valor de transações é de R$${somValor / transacao}`)
console.log(`Foram feitas o total de ${transacao} transações.`)
    


