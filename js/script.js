window.addEventListener('load', start);

var globalRed = 0,
    globalGreen = 0,
    globalBlue = 0;

function start() {

    // captura alteração de cada range
    var inputRed = document.querySelector('#red');
    inputRed.addEventListener('input', updateValueRed);
    
    var inputGreen = document.querySelector('#green');
    inputGreen.addEventListener('input', updateValueGreen);

    var inputBlue = document.querySelector('#blue');
    inputBlue.addEventListener('input', updateValueBlue);

    updateColorDiv(globalRed, globalGreen, globalBlue);

}

function updateValueRed(event) {
    console.log(event);
    // captura valor alterado
    var valor = event.target.value;
    
    // altera valor do input text
    var red = document.querySelector('#textRed');
    globalRed = red.value = valor;
    start();
}

function updateValueGreen(event) {
    // captura valor alterado
    var valor = event.target.value;
    
    // altera valor do input text
    var green = document.querySelector('#textGreen');
    globalGreen = green.value = valor;
    start();
}

function updateValueBlue(event) {
    // captura valor alterado
    var valor = event.target.value;
    
    // altera valor do input text
    var blue = document.querySelector('#textBlue');
    globalBlue = blue.value = valor;
    start();
}

function updateColorDiv(red, green, blue) {
    // altra div de cor
    // captura DIV
    var div = document.querySelector('#resultRGB');
    div.style.background = "rgb("+red+","+green+","+blue+")";
}