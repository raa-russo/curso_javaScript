const celular = {
    marcaCelular : 'ASUS',
    tamanhoTela : {
        vertical : 155,
        horizontal : 75
    },
    capacidadeBateria : 5000,
    ligar : function() {
        console.log("fazendo licação...")
    }
}
//podemos fazer ela desta maneira

// function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
//     return {
//         marcaCelular : marcaCelular,
//         tamanhoTela : tamanhoTela,
//         capacidadeBateria : capacidadeBateria,
//         ligar : function() {
//             console.log("fazendo licação...")
//         }
//     }
// }

//podemos fazer ela desta maneira
//function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
//     marcaCelular : 'ASUS',
//     tamanhoTela : {
//         vertical : 155,
//         horizontal : 75
//     },
//     capacidadeBateria : 5000,
//     ligar : function() {
//         console.log("fazendo licação...")
//     }
// }

//tbm podemos fazer desta maneira muito mais pratico.
function criarCelular(marcaCelular,tamanhoTela,capacidadeBateria) {
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar() {
            console.log("Fazendo ligação...");
        }
    }
}

//e para criarmos fazemos desta forma

const celular1 = criarCelular('Zenfone', 5.5, 5000);
console.log(celular1);

const celular2 = criarCelular('Xiaomi', 6.9, 10000);
console.log(celular2);