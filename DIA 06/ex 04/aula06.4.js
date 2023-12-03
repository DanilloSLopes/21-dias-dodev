let res = Number(prompt('Insira um numero'))
let segRes = res + 1
let terRes = res + 2

console.log('A tabuada de ' + res)
for(contador = 1; contador <= 10; contador ++){
    console.log(`${res} x ${contador} = ${res*contador}`)
} 

console.log('A tabuada de ' + segRes)

for(contador = 1; contador <= 10; contador ++){
    console.log(`${segRes} x ${contador} = ${segRes*contador}`)
}

console.log('A tabuada de ' + terRes)

for(contador = 1; contador <= 10; contador ++){
    console.log(`${terRes} x ${contador} = ${terRes*contador}`)
} 