// nossas VARIÁVEIS da BOLINHA
var xBolinha = 300;
var yBolinha = 200;
var dBolinha = 10;
var rBolinha = dBolinha / 2;

var velBolinhaX = 8;
var velBolinhaY = 8;

// nossas VARIÁVEIS da RAQUETE AMIGA
var xRaquet = 8
var yRaquet = 150
var largRaquete = 8
var altRaquete = 100

// nossas VARIÁVEIA para o OPONENTE
var xRaqueteOponente = 585;
var yRaqueteOponente = 150;
var velRaqueteOponenteY;

// nossa VARIÁVEL sobre o COLLIDE 2D
var collide = false;

// as VARIÁVEIS sobre os PONTOS
var meusPontos = 0;
var oponentePontos = 0;


// as VARIÁVEIS dos SONS
var raquetada;
var pontos;
var ProblemasDeUmMilionario;

function preload() {
    ProblemasDeUmMilionario = loadSound("Trilha ).mp3")
    pontos = loadSound("ponto.mp3")
    raquetada = loadSound("raquetada.mp3")
}


// nossas FUNCTIONS
function setup() {
    createCanvas(600,400);
    ProblemasDeUmMilionario.loop()
    // esse é o tamanho da tela onde está rodando o jogo
}

function draw() {
    background(0);
    mostraBolinha();
    movimentacaoBolinha();
    verificacaoDaBorda();
    raquetola(xRaquet, yRaquet);
    raquetolaOponente(xRaqueteOponente, yRaqueteOponente);
    movimentoRaquetola();
    movimentoRaqueteOponente();
    toqueRaquete();
    colisaoBiblio(xRaquet,yRaquet);
    colisaoBiblio(xRaqueteOponente,yRaqueteOponente);
    placar();
    pontosMarcados();
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

function raquetola(x, y) {
    rect(x, y, largRaquete, altRaquete);
}

function raquetolaOponente(x, y) {
    rect(x, y, largRaquete, altRaquete);
}

function movimentoRaquetola() {
    // ative para apertar contra o boot: if(keyIsDown(UP_ARROW)) {
    //    yRaquet -= 10;
    // }
    // if(keyIsDown(DOWN_ARROW)) {
    //    yRaquet += 10;
    // }
    if(keyIsDown(87)) {
        yRaquet -= 10;
    }
    if(keyIsDown(83)) {
        yRaquet += 10;
    }
}

function toqueRaquete() {
    if (xBolinha - rBolinha < xRaquet + largRaquete && yBolinha - rBolinha < yRaquet + altRaquete && yBolinha + rBolinha > yRaquet) {
        velBolinhaX *= -1
        raquetada.play();
    }
}

function colisaoBiblio(x,y) {
    colisao = collideRectCircle(x,y,largRaquete,altRaquete,xBolinha,yBolinha,rBolinha);
    if (colisao) {
        velBolinhaX *= -1
        raquetada.play()
    }
}

function movimentoRaqueteOponente() {
    // ative para ter um boot: velRaqueteOponenteY = yBolinha - yRaqueteOponente - largRaquete/2 - 30;
    // yRaqueteOponente += velRaqueteOponenteY
    if(keyIsDown(UP_ARROW)) {
        yRaqueteOponente -= 10;
    }
    if(keyIsDown(DOWN_ARROW)) {
        yRaqueteOponente += 10;
    }
}

function placar() {
    stroke(255);
    textSize(16);
    textAlign(CENTER);
    fill(color(0));
    rect(230,10,40,20);
    fill(255);
    text(meusPontos,250,26);
    fill(color(0));
    rect(330,10,40,20);
    fill(255);
    text(oponentePontos, 350,26);
    // nessa function, eu estou com medo, pois eu achei super brega deixar o ponteiro LARANJA, e eu a prinicípio, não ia colocar, mas pensei em colocar o fundo preto e a borda branca, se não puder me perdoe
}

function pontosMarcados() {
    if (xBolinha > 590) {
        meusPontos += 1;
        pontos.play();
    }
    if (xBolinha <10) {
        oponentePontos += 1;
        pontos.play();
    }
}