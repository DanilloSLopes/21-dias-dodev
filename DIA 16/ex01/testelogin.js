let nomes = ['Danillo', 'Brunno', 'Matheus']
let senhas = ['1311', '0311', '2808']
let condicao = true
let confirmacao = false



while (condicao){
    let acessoLogin = prompt('Insira seu login')
    let acessoSenha = prompt('Insira sua senha')
    for (let posicao = 0; posicao < senhas.length; posicao++){
        if(acessoLogin == nomes[posicao] && acessoSenha == senhas[posicao]){
            window.alert('Você está logado')
            condicao = false
            confirmacao = true
            }  
        
    } 
    if(confirmacao === false){
        window.alert('Login ou senha inválido tente novamente')
    }  
}
