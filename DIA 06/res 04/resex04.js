let numero = parseInt(prompt('Insira um numero'))


for(let i = numero; i <= numero +2; i ++){
    console.log(`Tabuada do numero: ${i}`)
    for ( let j = 1; j <=10 ; j++)
        console.log(`${i} x ${j} = ${i*j}`)
}


