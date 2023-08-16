//Incializando sons 
let somTrilha;
let somColisao;
let somPontos;


// Inicializando variáveis das Imagens 
let imagemDaEstarada;
let imagemDoAtor;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;
// Função Carregamento das Imagens 
function  preload() {
  imagemDaEstarada= loadImage("Imagens/estrada.png");
  imagemDoAtor= loadImage("Imagens/ator-1.png");
  imagemCarro1= loadImage("Imagens/carro-1.png");
  imagemCarro2= loadImage("Imagens/carro-2.png");
  imagemCarro3= loadImage("Imagens/carro-3.png");
  imagensCarros=[imagemCarro1,imagemCarro2,imagemCarro3,imagemCarro1,imagemCarro2,imagemCarro3];
  
  somTrilha= loadSound("Sons/trilha.mp3");
  somColisao= loadSound("Sons/colidiu.mp3");
  somPontos= loadSound("Sons/pontos.wav");
  
}