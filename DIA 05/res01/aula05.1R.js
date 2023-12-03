//CRIANDO VARIÁVEIS
let num1 = parseInt(prompt('Digite o primeiro número'))
let num2 = parseInt(prompt('Digie o segundo número'))
let opcao = parseInt(prompt('Escolha a operação que deseja realizar: ' + '\n1 = + (soma) \n2 = - (subtração) \n3 = * (multiplicação) \n4 = / (divisão'))
//esse \n usado nos códigos acima pula uma linha antes de digitar o que vem na sequencia

//CRIANDO SWITCH CASE 
switch(opcao){
    case 1:
        console.log(`${num1} + ${num2} = ` + (num1 + num2))
        break
    case 2:
        console.log(`${num1} - ${num2} = ` + (num1 - num2))
        break    
    case 3:
        console.log(`${num1} x ${num2} = ` + (num1 * num2))
        break
    case 4:
        console.log(`${num1} / ${num2} = ` + (num1 / num2))
        break
    }

