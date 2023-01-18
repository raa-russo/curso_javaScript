//funcao construtor de fabrica
//modelo camel case - umDoisTresQuatro.. inicia com letra minuscula

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

//modelo pascal case - UmDoisTresQuatro..inicia com letra maiuscula
function Celular(marcaCelular, tamanhoTela, capacidadeBateria) {
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function() {
        console.log("Aqui colocaria o seu codifo de fazer ligacao!");
    }
}

const celular = new Celular('asus', 5.5, 5000);
console.log(celular);

//outro modelo de funcao construtor..

function Roupas(cor, tamanho, descricao) {
    this.CorDaRoupa = cor,
    this.TamanhoDaRoupa = tamanho,
    this.DescricaoDaRoupa = descricao,
    this.Desconto = function() {
        console.log('aqui faria o desconto');
    }
}

const roupa1 = new Roupas('preta', 'G', 'Camiseta-Masculina');
console.log(roupa1);

const roupa2 = new Roupas('branca','M', 'Vestido-tubinho');
console.log(roupa2);