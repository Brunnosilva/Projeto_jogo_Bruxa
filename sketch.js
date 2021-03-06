let imagemCenario;
let imagemPersonagem;
let imagemInimigo;

let cenario;
let somdoJogo;
let personagem;
let inimigo;

const matrizInimigo=[
 [0, 0],
 [104, 0],
 [208, 0],
 [312, 0],
 [0, 104],
 [104, 104],
 [208, 104],
 [312, 104],
 [0, 208],
 [104, 208],
 [208, 208],
 [312, 208],
 [0, 312],
 [104, 312],
 [208, 312],
 [312, 312],
 [0, 418],
 [104, 418],
 [208, 418],
 [312, 418],
 [0, 522],
 [104, 522],
 [208, 522],
 [312, 522],
 [0, 626],
 [104, 626],
 [208, 626],
 [312, 626],
]

function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  somdoJogo = loadSound('sons/trilha_jogo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 4);
  personagem = new Personagem(imagemPersonagem);
  inimigo = new Inimigo(matrizInimigo , imagemInimigo , width - 52 , 52, 52, 104, 104 );
  somdoJogo.loop();
  frameRate(25)
}

function draw() {
  cenario.exibe();
  cenario.move();
  personagem.exibe();
  inimigo.exibe();
}

