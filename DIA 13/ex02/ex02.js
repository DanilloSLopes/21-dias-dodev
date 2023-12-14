class Carros{
    Nome
    Potencia
    VelocidadeMaxima
    Aceleracao
    constructor (nome, potencia, velocidadeM, aceleracao){
        this.Nome = nome    
        this.Potencia = potencia
        this.VelocidadeMaxima = velocidadeM
        this.Aceleracao = aceleracao
    }

    calculoTempo(distancia){
        let resultado = distancia / (this.VelocidadeMaxima/this.Aceleracao)
        return resultado
    }
}

class Corridas{
    Nome
    Tipo
    Distancia
    Vencedor
    Participantes
    constructor(nome, tipo, distancia){
        this.Nome = nome
        this.Tipo = tipo
        this.Distancia = distancia
        this.Vencedor = ''
        this.Participantes = []
    }

    vencedor(){
        let menorTempo = this.Participantes[0].calculoTempo(this.Distancia)
        let vencedor = this.Participantes[0]
        for(let index = 1; index  < this.Participantes.length; index++){
            let tempo = this.Participantes[index].calculoTempo(this.Distancia)
            if (tempo < menorTempo){
                menorTempo = tempo
                vencedor = this.Participantes[index]
            }
        }
        return this.Vencedor = vencedor
    }
    exibirVencedor(){
        alert('O vencedor é o ' + this.Vencedor.Nome)
    }
}

let corrida = new Corridas ('Brazil', 'Fórmula 1', 2000,)

corrida.Participantes[0] = new Carros('Kicks', 120, 160, 5)
corrida.Participantes[1] = new Carros('Marea', 210, 200, 9)
corrida.Participantes[2] = new Carros('Peugeot 203', 300, 220, 10)

corrida.vencedor()
corrida.exibirVencedor()
