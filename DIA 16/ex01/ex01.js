let nomes = []
let senhas = []

function saudacao(){
    let escolha = Number(prompt('Cadastrar digite 1 \nLogin digite 2\nExcluir digite 3 \nEncerrar programa digite 4'))
    return escolha
}

function cadastro(){
    let nome = prompt('Insira um login')
    let senha = prompt('Insira uma senha')
    nomes.push(nome)
    senhas.push(senha)
    console.log(`Usuário ${nome} cadastrado com sucesso`)
}

function fazerLogin(nome, senha){
    let indice = nomes.indexOf(nome)
    if (indice !== -1 && senhas[indice] == senha){
        return true
    } else {
        return false
    }
}

function exclusao(name){
    let indice = nomes.indexOf(name)
    if (indice !== -1){
        nomes.splice(indice, 1)
        senhas.splice(indice, 1)
        console.log(`Usuario ${name} excluído com sucesso!`)
    } else {
        console.log(`Usuario ${name} não encontrado`)
    } 
} 

//Criando o fluxo de funcinamento

let condicao = true
while (condicao){
    let opcao = saudacao()

    switch(opcao){
        case 1:
            cadastro()
            break;
        
        case 2:
            let nome = prompt('Insira o login')
            let senha = Number(prompt('Insira a senha'))
            let login = fazerLogin(nome, senha)
            if (login){
                console.log('Login realizado com sucesso')
            } else {
                console.log('Falha no login, tente novamente')
            }
            break;
        
        case 3:
            let name = prompt('Insira o login')
            exclusao (name)
            break
        
        case 4:
            condicao = false
            console.log('Programa encerrado')
            break
        
        default:
            console.log('Opção invalida, tente novamente')
            break
    }
}