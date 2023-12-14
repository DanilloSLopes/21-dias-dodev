let condicao = 2
while (condicao == 2){
    var nome = prompt('Insira seu nome')
    var idade = Number(prompt('Insira sua idade'))
    var salario = Number(prompt('Insira seu salario'))

    window.alert(`Olá ${nome}, você tem ${idade} anos e seu salário mensal é de R$${salario},00.`)
    condicao = Number(prompt('As informaçoes estão corretas? Se sim digite 1, se não digite 2 para refazer todas as informações'))
} 

console.log('Sua previsão salaria para os proximos dez anos é:')    
let aumento = 0.015

for(let ano = 1; ano <= 10; ano++){
    salario += salario * aumento
    aumento *= 2

    console.log((2023 + ano) + ' - R$' + salario)
}
