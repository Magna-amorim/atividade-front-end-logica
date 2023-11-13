let temperatura;
let escala;
let resultado;

function conversor() {

    // entrada do operador selecionado
    temperatura = parseFloat(document.querySelector('#TXTtemperatura').value);
    escala = document.querySelector('#slcescala').value;

    // verifica se é celsius
    if (escala == 'celsius') {
        resultado = (temperatura - 32) / 1.8;
    }
    document.querySelector('#resultado').innerHTML = resultado;

    // verifica se é fahrenheit
    if (escala == 'fahrenheit') {
        resultado = temperatura * 1.8 +32;
    }

    //SAIDA (VALOR DA CONVERSAO)
    document.querySelector('#resultado').innerHTML = resultado;

}
function limpar(){
    document.querySelector('#TXTtemperatura').value = '';
    document.querySelector('#slcescala').value = '';
    document.querySelector('#resultado').innerHTML = '-';
}
