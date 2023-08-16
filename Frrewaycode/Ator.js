  // Definição das coordenadas do ator 
let xAtor=85;
let yAtor=366;
let colisao=false;
let meusPontos=0;
//--------------------------------------------------------
//Função mostra ator na pista 
function mostraAtor(){
  image(imagemDoAtor,xAtor,yAtor,30,30);
}
//--------------------------------------------------------
// Função que movimenta Ator na pista 
function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor-=3;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(podeMover()){
      yAtor+=3;
    }
    
  }
}
//--------------------------------------------------------
//Funçãp Verifica Função
function verificaColisao(){
  for(let i=0; i< imagensCarros.length;i++){
    colisao=collideRectCircle(xCarro[i],yCarro[i],comprimentoCarro,alturaCarro,xAtor,yAtor,15);
    if(colisao){
      somColisao.play();
      voltaPosicaoInicial();
      if(pontosMaiorQueZero()){
        meusPontos-=1;
      }
    }
  }
}
//--------------------------------------------------------
//Função Colidiu Retorna o ator para posição iniciao 
function voltaPosicaoInicial(){
  yAtor=366;
}
//--------------------------------------------------------
//Função mostra  Pontos 
function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255,240,60));
  text(meusPontos, width/5,27);
}
//-------------------------------------------------------
//Função Marca pontos 
function marcaPontos(){
  if(yAtor<15){
    somPontos.play();
    meusPontos+=1;
    voltaPosicaoInicial();
  }
}
//--------------------------------------------------------
function pontosMaiorQueZero(){
  return meusPontos>0;
}
//--------------------------------------------------------
function podeMover(){
  return yAtor<366;
}