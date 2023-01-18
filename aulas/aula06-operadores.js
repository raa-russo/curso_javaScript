//operadores aritmeticos
//operadores de incremento e decremento
//operadores atribuicao
//operadores de comparacao
//operadores logicos
//operadores bitwise

//operadores aritmeticos (+ , -, *, /, **)
let salario = 100
console.log(salario + salario)
console.log(salario - salario)
console.log(salario * salario)
console.log(salario / salario)
console.log(salario ** salario)

//operadores de incremento ( ++ , --)
let idade = 18
console.log(idade++)
console.log(--idade)

//operadores de atribuicao
let valorTeclado = 100
valorTeclado += valorTeclado
console.log(valorTeclado)

//operadores de igualdade estrita
console.log(1 === 1)
console.log('1' === 1)

//operadores de igualdade solta
console.log(1 == 1)

//operador ternario
//exemplo, tem um cliente , 100 é premium, menor é comum
let pontos = 200
let tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo)

//operadores logicos (&& se ambos for true) 
// console.log(true && true)
// console.log(true && false)
// console.log(false && false)
//exemplo compar se a pessoa é maior de idade e tem carteira de habilitacao
let maiorIdade = true
let possuiCNH = true
let podeAplicar = maiorIdade && possuiCNH
console.log(podeAplicar);

//operadores logicos (|| se um dos operando for true) 
// console.log(true || true)
// console.log(true || false)
// console.log(false || false)
//exemplo compar se a pessoa é maior de idade e tem carteira de habilitacao
let deMaiorIdade = true
let temCNH = false
let Aplicar = deMaiorIdade || temCNH
console.log(Aplicar);

//operador logico not (! inverte a frase)
let candidatoRecusado = !podeAplicar
console.log(candidatoRecusado)

//operadores de comparacao valores nao boleanos (falsy, undefined, null, 0, false, '', NaN - not a number and truthy)
let corPersonalizada = 'vermelho'
let corPadrao = 'azul'
let corPerfil = corPersonalizada || corPadrao
console.log(corPerfil)

















