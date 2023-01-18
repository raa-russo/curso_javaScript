//funcoes que realizam uma tarefa e nao tem retorno

function dizerNome(){
    console.log('russo')
}

dizerNome()

//funcoes com retorno

function multiplicadorPorDois(valor){
    return valor * 2
}

let resultado = multiplicadorPorDois(5)

console.log(resultado)
