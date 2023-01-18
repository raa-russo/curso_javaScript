//criar uma funcao somar que retorne a soma dos multiplos de 3 e de 5
// multiplos de 3 = 3,6,9..
// multiplos de 5 = 5, 10..
//armazenas os multiplos de 3 e os de 5 separradamente e depois somar todos.

somar(10)
function somar(limite) {
    let multiplosDe3 = 0;
    let multiplosDe5 = 0;
    for(i = 0; i <= limite; i++) {
        if(i % 3 === 0)
            multiplosDe3 += i;   
        if(i % 5 === 0)
            multiplosDe5 += i;
    }
    console.log(multiplosDe3 + multiplosDe5);
}