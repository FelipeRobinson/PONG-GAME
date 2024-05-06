// nossas VARIÁVEIS da BOLINHA
var xBolinha = 300;
var yBolinha = 200;
var dBolinha = 10;
var rBolinha = dBolinha / 2;

var velBolinhaX = 8;
var velBolinhaY = 8;

// nossas VARIÁVEIS da RAQUETE AMIGA
var xRaquet = 10
var yRaquet = 150
var largRaquete = 10
var altRaquete = 90


// nossas VARIÁVEIS do COLLIDE


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
    toqueRaquete();
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

function toqueRaquete() {
    if (xBolinha - rBolinha < xRaquet + largRaquete && yBolinha - rBolinha < yRaquet + altRaquete && yBolinha + rBolinha > yRaquet) {
        velBolinhaX *= -1
    }
}