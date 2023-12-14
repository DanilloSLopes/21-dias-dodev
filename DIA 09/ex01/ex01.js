let condicao = 1
do{
    let nome = prompt('Insira seu nome')
    let idade = Number(prompt('Insira usa idade'))
    let peso = Number(prompt('Insira seu peso'))
    let altura = Number(prompt('Insira sua altura em metros'))
    let profissao = prompt('Insira sua profissão')

    window.alert(`Olá ${nome}, você tem ${idade} anos, é ${profissao}, tem ${altura}m de altura e pesa ${peso}Kg.`)
    if (idade <= 18){
        window.alert('Sem gelada para você!')
    } else {
        window.alert('Está liberado para tomar umas geladas')
    }

    let idadeM = idade * 12
    let idadeS = idadeM * 7
    let idadeD = idadeM * 365

    window.alert(`Você tem ${idadeM} meses de vida, tem ${idadeS} semanas de vida e tem ${idadeD} dias de vida`)

    let imc = peso / (altura * altura)
    if (imc <= 18.5){
        window.alert('MAGREZA, seu imc é de ' + imc + 'Kg/m2')
    } else if (imc <= 24.9 ){
        window.alert('NORMAL, seu imc é de ' + imc + 'Kg/m2')
    } else if (imc <= 30){
        window.alert('SOBREPESO, seu imc é de ' + imc + 'Kg/m2')
    } else {
        window.alert('OBESIDADE, seu imc é de ' + imc + 'Kg/m2')
    }

    let ano = 2023
    let anoNascimento = ano - idade
    window.alert('Você nasceu no ano de ' + anoNascimento)


    for (i = 0; anoNascimento <= ano; i++){
        console.log(anoNascimento + ' - ' + i + ' anos de idade')
        anoNascimento++

    }
    condicao = Number(prompt('Gostaria de incerir novos dados (digite 1), ou encerrar o programa (digite 2)'))
} while (condicao == 1)
window.alert('O programa foi encerrado')
