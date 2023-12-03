//Criando as variaveis
let fome = ''
let money = ''
let restaurante = ''


/*teste
let fome = 'sim'
let money = 'sim'
let restaurante = 'não'
*/

//Pergunta para o usuário
fome = prompt('Ta com fome querido? Responda sim ou não')
money = prompt("Ta com dinheiro na conta? Responda sim ou não")
restaurante = prompt('Esta aberto os restaurantes? Responda sim ou não')

if (fome === "não" || money === 'não'){
    console.log('Hoje a janta será em casa')
} else {
    if(restaurante === 'não'){
        console.log('Peça um delivery')
    } else {
        console.log('Hoje a janta será no seu restaurante preferido')
    }
} 
