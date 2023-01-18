//criar uma funcao que mostre os numeros primos
//primos (divisivel por 1 ou ele msm)
//compostos(dividido por mais que 1 e ele msm)
//ex: 10, 11
exibirNumerosPrimos(15);

function exibirNumerosPrimos(limite) {
    for(let numero = 2; numero <= limite; numero++) {
        let ehprimo = true;

        for(let divisor = 2; divisor < numero; divisor++) {
            if(numero % divisor === 0) {
                ehprimo = false;
                break;
            }           
        }
        if(ehprimo) console.log(numero)
    }
}
