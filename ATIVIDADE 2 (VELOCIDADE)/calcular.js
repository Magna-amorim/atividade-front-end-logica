function calcular() {

    let tempo;
    let velocidade;
    let distancia;
    let consumo;

    // entrada do dado de tempo
    tempo = parseFloat(document.querySelector('#TXTtempo').value);

    // entrada do dado de velocidade
    velocidade = parseFloat(document.querySelector('#TXTvelocidade').value);

    //calculo de distancia
    distancia = velocidade * tempo;

    //calculo de consumo
    consumo = distancia / 12;

    //SAIDA (CONSUMO)
    document.querySelector('#consumo').innerHTML = consumo.toFixed(2);

}

function limpar(){
    document.querySelector('#TXTtempo').value = '';
    document.querySelector('#TXTvelocidade').value = '';
    document.querySelector('#consumo').innerHTML = '-';
}