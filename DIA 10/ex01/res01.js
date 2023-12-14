const array = []
const indice = []
let contadorIndice = 0

const numeroProcurado = parseInt(prompt('Digite o númeor a ser procurado:'))

for (let i = 0; i < 10; i++){
    const elemento = parseInt(prompt(`Digite o elemento ${i + 1}:`))
    array [i] = elemento
}

for (let i = 0; i < 10; i++){
    if (array[i] === numeroProcurado) {
        indice [contadorIndice] = i
        contadorIndice ++
    }

}

console.log(`O número ${numeroProcurado} foi encontrado no indice: ${indice}`)