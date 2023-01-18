//velocidade maxima 60km/h e a cada 5km a mais do limite ganha 1 ponto na carteira de cnh
//math.floor(), sempre arredonda o numero para baixo.
//caso pontos sejam maior que 12 -> 'Carteira Suspenca
verificarVelocidade(100);

function verificarVelocidade(velocidade) {
   
    if (velocidade <= 83)    
        console.log('Ok');
    else {
        const pontos = Math.floor((velocidade - 70) / 5)
        if(pontos >= 12)
            console.log('Carteira Suspensa')
        else
            console.log('Pontos', pontos)
    }

}