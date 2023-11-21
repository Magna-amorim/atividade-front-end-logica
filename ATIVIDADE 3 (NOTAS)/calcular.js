
function calcular() {
    
let nota1;
let nota2;
let nota3;
let nota4;
let calcular;
let situacao;
let media


    // entrada do operador selecionado
    nota1 = parseFloat(document.querySelector('#TXTnota1').value);
    if (nota1 < 0 || nota1 > 10) { 
        alert ('NOTA 1 NÃO É VALIDA');
        document.querySelector('#nota1').value = '';
        document.querySelector('nota1').focus();
        return false;
    }
    nota2 = parseFloat(document.querySelector('#TXTnota2').value);
    if (nota2 < 0 || nota2 > 10) { 
        alert ('NOTA 2 NÃO É VALIDA');
        document.querySelector('#nota2').value = '';
        document.querySelector('nota2').focus();
        return false;
    }
    nota3 = parseFloat(document.querySelector('#TXTnota3').value);
    if (nota3 < 0 || nota3 > 10) { 
        alert ('NOTA 3 NÃO É VALIDA');
        document.querySelector('#nota3').value = '';
        document.querySelector('nota3').focus();
        return false;
    }
    nota4 = parseFloat(document.querySelector('#TXTnota4').value);
    if (nota4 < 0 || nota4 > 10) { 
        alert ('NOTA 4 NÃO É VALIDA');
        document.querySelector('#nota4').value = '';
        document.querySelector('nota4').focus();
        return false;
    }


    //calculo de media
    media = (nota1 + nota2 + nota3 + nota4) / 4;

    // verifique a media, se aprovado ou reprovado

    if (media>=7) {
    document.querySelector('#TXTsituacao').setAttribute('class', 'bg-success'); 
    document.querySelector('#TXTsituacao').innerHTML= 'APROVADO'; 
    }
    else{
        document.querySelector('#TXTsituacao').setAttribute('class', 'bg-danger'); 
        document.querySelector('#TXTsituacao').innerHTML= 'REPROVADO'; 
    }
    


}
function limpar(){
    document.querySelector('#TXTnota1').value = '';
    document.querySelector('#TXTnota2').value = '';
    document.querySelector('#TXTnota3').value = '';
    document.querySelector('#TXTnota4').value = '';
    document.querySelector('#TXTsituacao').innerHTML = '-';
}