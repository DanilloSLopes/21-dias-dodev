class Computadores{
    Tipo
    Processador
    Video
    Armazenamento
    MemoriaRam
    SSD
    constructor(tipo, processador, video, armazenamento, ram, ssd){
        this.Tipo = tipo
        this.Processador = processador
        this.Video = video
        this.Armazenamento = armazenamento
        this.MemoriaRam = ram
        this.SSD = ssd
    }
    
    apresentar(){
        console.log(`O seu computador é um ${this.Tipo} com processador modelo ${this.Processador}, placa de vídeo modelo ${this.Video}, ${this.Armazenamento} GB de armazenamento, ${this.MemoriaRam} GB de meória ram e ${this.SSD} GB de extenssão em SSD`)
    
    }
}
let computadores = []
let condicao = true
let indexComputador = 0

while (condicao) {
    let tipoComputador = prompt('Insira o tipo do seu computador, se é desktop ou notebook')
    let processadorComputador = prompt('Insira o modelo do processador')
    let videoComputador = prompt('Placa de vídeo integrada ou dedicada?')
    let armazenamentoComputador = prompt('Quantos GB de memória seu computador tem')
    let memoriaComputador = prompt('Quanto de memória RAM ele tem?')
    let ssdComputador = prompt('Quanto de memoria em SSD ele tem?')
    let computador = new Computadores(tipoComputador, processadorComputador, videoComputador, armazenamentoComputador, memoriaComputador, ssdComputador)

    computadores[indexComputador] = computador

    let desejaContinuar = prompt('Deseja cadastrar mais algum computador? (s/n)')
        if(desejaContinuar != 's'){
            condicao = false
        } else {
            indexComputador++
        }


}