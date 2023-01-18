//o uso do for, while , do while, for in e for of.

//for
for(let i = 0; i < 5; i++) {
    console.log('Estou aprendendo js!', i + 1)
}

for(let i = 1; i <= 5; i++) { //imprimir somente os impares
    if(i % 2 !== 0){
        console.log(i)
    }    
}

for(let i = 10; i > 1; i--) { //imprimir decrescente
    if(i % 2 == 0){
        console.log(i)
    }    
}

//while

let i = 5

while (i >= 1) {
    console.log(i--)
}

//do while
let j = 0
do {
    console.log('Digitando!', i)
    i++
} while (i < 10);
