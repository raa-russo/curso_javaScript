//for in usado em array

const pessoa = {
    nome: 'Russo',
    idade: 25
}

for(let chave in pessoa) {
    console.log(chave, pessoa.nome, pessoa.idade)
}

const cores = ['vermelho', 'azul', 'verde']

for (let indice in cores) {
    console.log(indice, cores[indice])
}

//for-of muito usado em arrays
for(let cor of cores) {
    console.log(cor)
}

const cao = ['pequeno', 'peludo', 'inteligente', 'cheiroso', 'bonzinho']
for(let tipo of cao) {
    console.log(tipo)
}