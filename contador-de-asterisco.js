//criar uma funcao que exibe a quantidade de * de cada linha

exibirAsterisco(10);

function exibirAsterisco(linhas) {
    // let padrao = ' ';
    // for(let linha = 1; linha <=linhas; linha++) {
    //     padrao += '*';
    //     console.log(padrao);
    // }
    //podemos fazer desta maneira  tambem..
    for(let linha = 1; linha <=linhas; linha++) {
        padrao = ' ';
        for(let i = 0; i < linha; i++) {
            padrao += '*';
        }
    console.log(padrao);
    }
}

