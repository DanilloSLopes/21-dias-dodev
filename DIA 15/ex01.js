let arrayA = [13, 20, 10, 22, 24, 20, 27, 17, 19, 14]
let arrayB = [24, 22, 23, 11, 15, 17, 29, 14, 16, 21]


function numerosIguais(arrayUm, arrayDois){ //declaramos a função com dois parametros pedidos
    var novoArray = []//Array do resultado
    let contador = 0 //contador para o novo array
    for(let indexA = 0; indexA < arrayUm.length; indexA++){
        //o primeiro for percorre todos os elementos do primeiro array
        for(let indexB = 0; indexB < arrayDois.length; indexB++){
            //o segundo for percorre os elementos do segundo array, ou seja, para cada
            //numero do primeiro array, ele percorre todos os numeros do segundo array
            if (arrayUm[indexA] === arrayDois[indexB]){
                novoArray[contador] = arrayUm[indexA]
                contador++
                indexB = arrayDois.length
                //Se a comparação for bem sucedida, ele vai atribuir esse valor ao novo array iniciando na posição 0, vai aumentar o contador
                //para que o proximo numero adicionado seja na posição seguinte, e vai sair do segundo array para que não corra o risco de
                //repetir numero. ai ele vai para o proximo numero do array um e compara novamente com todos os do array dois até que a condição
                //seja verdadeira, caso não for ele passa para o próximo numero do array um e repete o precesso.
            }
        }
    }
    return novoArray
}

console.log(numerosIguais(arrayA, arrayB))