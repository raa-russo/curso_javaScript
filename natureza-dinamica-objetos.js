//natureza dinamica de objetos
const mouse = {
    cor : 'black',
    marca : 'aoc',
}

console.log(mouse);

//podemos add + descriceos para ele

mouse.velocidade = 5000;
console.log(mouse);

//podemos add funcoes para ele tbm

mouse.trocarDPI = function() {
    console.log('mudando DPI');
}
console.log(mouse);

//tbm podemos deletar alguma propriedade
delete mouse.velocidade;
console.log(mouse);
