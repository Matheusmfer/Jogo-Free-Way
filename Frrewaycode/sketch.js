function setup() {
  createCanvas(500, 400);
  somTrilha.loop();
}

function draw() {
  background(imagemDaEstarada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaCarroPosicaoInicial();
  verificaColisao();
  incluiPontos();
  marcaPontos();
}


