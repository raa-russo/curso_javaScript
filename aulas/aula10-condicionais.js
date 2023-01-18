//if ...else   e switch...case
//vamos pegar a hora atual, se for entre 6 e 12h bom dia, se for entre 12 e 18h, boa tarde senao boa noite.
let hora = 19 

if(hora > 6 && hora < 12){
    console.log('Bom dia!')
}
else if(hora >12 && hora < 18){
    console.log('Boa tarde!')
}
else {
    console.log('Boa noite!')
}


//switch case

let permissao;
permissao = 'gerente'

switch (permissao) {
    case 'comum'
        console.log('usuário comum');
        break;

    case 'gerente'
        console.log('usuário gerente');
        break;

    case 'diretor'
        console.log('usuário diretor');
        break;

    default:
        console.log('Usuário nao reconhecido!');
}