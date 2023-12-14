let nomes = ['Danillo', 'Brunno', 'Matheus']
let senhas = ['1311', '0311', '2808']
let condicao = true
let confirmacao = false

while(condicao){
    let = excluirL = prompt('Insira o login que deve ser excluido')
    let = excluirS = prompt('Insira a senha do login que deseja cancelar')
    
    for (let posicao = 0; posicao < nomes.length; posicao++){
        if (nomes[posicao] === excluirL && senhas[posicao] === excluirS){
            nomes.splice(posicao, 1)
            window.alert(`Login: ${excluirL}, removido com sucesso`)
            let excluirMais = prompt('Gostaria de excluir mais algum usuário? (s/n)')
            if (excluirMais === 'n'){
                condicao = false
                confirmacao = true
                window.alert('Programa encerrado')
            } else if (excluirMais === 's'){
                confimacao = true
            }
        } 
    }
    if (confirmacao === false){
        let res = prompt('Usuário não encontrado. Gostaria de tentar novamente? (s/n)')
        if(res != 's'){
            condicao = false
            window.alert('Programa encerrado')
        }
    }
}
