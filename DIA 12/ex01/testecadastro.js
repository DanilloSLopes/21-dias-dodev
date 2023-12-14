
let nomes = ['Danillo', 'Brunno', 'Matheus']
let senhas = ['1311', '0311', '2808']
let condicao = true
let confirmacao = false

while (condicao){
    let nomeLiberado = true
    let novoNome = prompt('Insira um login para o cadastro')
    let novaSenha = prompt('Insira uma senha para o cadastro')
    for (let posicao = 0; posicao < nomes.length; posicao++){
        if (novoNome === nomes[posicao]){
            nomeLiberado = false
            window.alert('Login ja cadastrado, tento algo diferente')
        }    
    }
    if (nomeLiberado === true){
        window.alert(`Login ${novoNome} cadastrado com sucesso!`)
        nomes.push(novoNome)
        senhas.push(novaSenha)
    }
    let desejo = prompt('Deseja fazer um novo cadastro? (s/n)')
    if (desejo !== 's'){
        condicao = false
        window.alert('Programa encerrado')
    }
}

