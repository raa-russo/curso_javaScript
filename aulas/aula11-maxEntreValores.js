//esvreva uma funcao que use 2 numeros e retorne o maiopr entre eles.
let valorMaior = max(10, 67)
console.log(valorMaior)

function max(n1, n2) {
    if(n1 > n2)
        return n1;
    return n2; // nao precisa usar o else pois o sistema ja entende que se noa for a 1 sera a 2..
}

//podemos usar tbm esta formula mais simples.
let Maior  = maior(20, 30)
console.log(Maior)
function maior(n1, n2) {
    return n1 > n2 ? n1: n2;
}

