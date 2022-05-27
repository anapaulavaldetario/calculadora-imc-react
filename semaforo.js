const img = document.getElementById ('img');
const buttonred = document.getElementById ('red');
const buttonyellow = document.getElementById ('yellow');
const buttongreen = document.getElementById ('green');

function semafarored () {
    img.src = './img/vermelho.png';
    
}

function semafaroyellow () {
    img.src = './img/amarelo.png';
}

function semafarogreen () {
    img.src = './img/verde.png';
}

const semafaroautomatico = {
   'red':    () => img.src = './img/vermelho.png',
   'yellow':  () => img.src = './img/amarelo.png',
   'green':   () => img.src = './img/verde.png',
   'automatic': () => intervalID = setInterval( changeColor, 1000)
}

buttonred.addEventListener ( 'click', semafarored);
buttonyellow.addEventListener ('click', semafaroyellow);
buttongreen.addEventListener ('click', semafarogreen );











