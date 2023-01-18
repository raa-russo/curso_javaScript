//criar um metodo para ler as propriedades de um obj.
//exibir somente se for string
const filme = {
    titulo : 'Vingadores',
    ano : 2018,
    diretor : 'Robin',
    personagem : 'Thor'
}

exibirPropriedades(filme);
function exibirPropriedades(obj) {
    for (prop in obj)
        if(typeof obj [prop] === 'string')
            console.log(prop, obj[prop])
}

//exibir numbers
const livro = {
    titulo: 'pai rico',
    ano: 2010,
    escritor: 'adam sandler',
    personagem: 'russo'
}

exibirEstring(livro)
function exibirEstring(obj) {
    for(prop in obj)
        if(typeof obj[prop] === 'number')
            console.log(prop, obj[prop])
}