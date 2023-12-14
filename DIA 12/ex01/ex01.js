var nomes = ['Danillo', 'Beatriz', 'Brunno', 'Matheus', 'Valdecir', 'Shirlene']
var senhas = ['1311', '2510', '0311', '2808', '2808', '2201']
//let nomes = []
//let senhas = []
let painelInicial = true

while (painelInicial){
    let comando = Number(prompt('O que gostaria de fazer: cadastrar (1), login (2), excluir um cadastro (3), encerrar o programa (4)'))
    let condicao = true
    switch (comando){
        case 1:
            while (condicao){
                let nomeLiberado = true
                var novoNome = prompt('Insira um login para o cadastro')
                var novaSenha = prompt('Insira uma senha para o cadastro')
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
                    let finaliza = prompt('Voltar ao painel inicial? (s/n)')
                    if (finaliza !== 's'){
                        condicao = false
                        painelInicial = false
                        window.alert('Programa encerrado')
                    } else {
                        condicao = false
                    }
                }
            }
            break

        case 2:
            while (condicao){
                let confirmacao = false
                let acessoLogin = prompt('Insira seu login')
                let acessoSenha = prompt('Insira sua senha')
                for (let posicao = 0; posicao < senhas.length; posicao++){
                    if(acessoLogin === nomes[posicao] && acessoSenha === senhas[posicao]){
                        window.alert('Você está logado')
                        condicao = false
                        confirmacao = true
                        painelInicial = false
                    }  
                
                } 
                if(confirmacao === false){
                    window.alert('Login ou senha inválido tente novamente')
                }  
            }
            break

        case 3:
            while(condicao){
                let confirmacao = false
                let = excluirL = prompt('Insira o login que deve ser excluido')
                let = excluirS = prompt('Insira a senha do login que deseja cancelar')
                for (let posicao = 0; posicao < nomes.length; posicao++){
                    if (nomes[posicao] === excluirL && senhas[posicao] === excluirS){
                        nomes.splice(posicao, 1)
                        senhas.splice(posicao, 1)
                        window.alert(`Login: ${excluirL}, removido com sucesso`)
                        let excluirMais = prompt('Gostaria de excluir mais algum usuário? (s/n)')
                        if (excluirMais === 'n'){
                            condicao = false
                            confirmacao = true
                            let finaliza = prompt('Voltar ao painel inicial? (s/n)')
                            if (finaliza !== 's'){
                                painelInicial = false
                                window.alert('Programa encerrado')
                            }
                        } else if (excluirMais === 's'){
                            confirmacao = true
                        }
                    } 
                }
                if (confirmacao === false){
                    let res = prompt('Usuário não encontrado. Gostaria de tentar novamente? (s/n)')
                    if(res != 's'){
                        condicao = false
                        let finaliza = prompt('Voltar ao painel inicial? (s/n)')
                        if (finaliza !== 's'){
                        painelInicial = false
                        window.alert('Programa encerrado')
                        } 
                    }
                }
            }
            break
        
        default:
            painelInicial = false
            window.alert('Programa encerrado')
            break
    }
}