let imagemCenario;
let cenario;
let imagemPersonagem;
let somdoJogo;
let personagem;

function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  somdoJogo = loadSound('sons/trilha_jogo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 4);
  personagem = new Personagem(imagemPersonagem);
  somdoJogo.loop();
  frameRate(25)
}

function draw() {
  cenario.exibe();
  cenario.move();
  personagem.exibe();
}

