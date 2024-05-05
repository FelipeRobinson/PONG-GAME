//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXBolinha = 2;
let velocidadeYBolinha = 2;

function setup() {
    createCanvas(600,400);
}

function draw() {
    background(0);
    mostraBolinha();
    movimentaBolinha();
    verificaColisaoBorda();
}

function mostraBolinha() {
    circle(xBolinha, yBolinha, diametro)
}

function movimentaBolinha() {
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
    if (xBolinha + raio > width || xBolinha - raio < 0) {
        velocidadeXBolinha *= -1;
    }
    if (yBolinha + raio > height || yBolinha - raio < 0) {
        velocidadeYBolinha *= -1;
    }
}

// lá em cima, o let dá os valores a variável, o x e o y é aonde a bolinha vai
// se localizar na tela, e o d é o diametro da bolinha 