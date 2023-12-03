let res = Number(prompt('Insira um numero'))

for(let mult = res; mult <= res + 4; mult ++){
    console.log('A tabuada de ' + mult)
    for(contador = 1; contador <= 10; contador ++){
        console.log(`${mult} x ${contador} = ${mult*contador}`)
    }
} 
