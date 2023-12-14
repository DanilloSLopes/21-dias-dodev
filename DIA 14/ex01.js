function colaborador(){
    var nome = prompt('Insira o nome do colaborador')
    var salarioInicial = Number(prompt('Insira o salário do colaborador'))
    aumento(nome, salarioInicial)
    }

function aumento(nome, salarioInicial){
    var salarioReajustado = 0
    var porcentagem = ''
    if (salarioInicial <= 1500){
        salarioReajustado = salarioInicial * 1.2
        porcentagem = ('20%')
    } else if (salarioInicial <= 2000){
        salarioReajustado = salarioInicial * 1.15
        porcentagem = ('15%')
    } else if (salarioInicial <= 3000){
        salarioReajustado = salarioInicial * 1.1
        porcentagem = ('10%')
    } else {
        salarioReajustado = salarioInicial *1.05
        porcentagem = ('5%')
    }
    console.log(`Nome do colagorador ${nome}`)
    console.log(`Salário de R$${salarioInicial}`)
    console.log(`O aumento será de ${porcentagem}`)
    console.log(`O salário com reajuste ficara em R$${salarioReajustado}`)

    perguntar()
}

function perguntar(){
    let desejo = prompt('Gostaria de calcular novamente em novas condições? (s/n)')
    if (desejo != 's'){
        console.log('Programa encerrado')
    } else {
        colaborador()
    }
}
