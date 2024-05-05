// nossas VARIÁVEIS da BOLINHA
let xBolinha = 300;
let yBolinha = 200;
let dBolinha = 10;
let rBolinha = dBolinha / 2;

let velBolinhaX = 8;
let velBolinhaY = 8;

// nossas VARIÁVEIS da RAQUETE AMIGA
let xRaquet = 10
let yRaquet = 150
let largRaquete = 10
let altRaquete = 90

// nossas FUNCTIONS
function setup() {
    createCanvas(600,400);
    // esse é o tamanho da tela onde está rodando o jogo
}

function draw() {
    background(0);
    mostraBolinha();
    movimentacaoBolinha();
    verificacaoDaBorda();
    raquetola();
    moviementoRaquetola();
    // aqui fizemos as refatorações do código, para aplicar melhor
}

function mostraBolinha() {
    circle(xBolinha, yBolinha, dBolinha)
    // nesse circle, temos as definições desse objeto:
    // (x,y = eixo aonde a bolinha ira se encontrar)
    // (d = diametro da bolinha, o seu tamanho)
}

function movimentacaoBolinha() {
    xBolinha += velBolinhaX;
    yBolinha += velBolinhaY;
}

function verificacaoDaBorda() {
    if (xBolinha + rBolinha > width || xBolinha - rBolinha < 0) {
        velBolinhaX *= -1;
    }
    if (yBolinha + rBolinha > height || yBolinha - rBolinha < 0) {
        velBolinhaY *= -1;
    }
}

function raquetola() {
    rect(xRaquet, yRaquet, largRaquete, altRaquete)
}

function moviementoRaquetola() {
    if(keyIsDown(UP_ARROW)) {
        yRaquet -= 10;
    }
    if(keyIsDown(DOWN_ARROW)) {
        yRaquet += 10;
    }
}