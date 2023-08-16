// Coordenadas dos carros 
let xCarro=[600,600,600,600,600,600];
let yCarro=[40,96,150,210,270,318];
let comprimentoCarro=50;
let alturaCarro=40;
let velocidade=[2,2.5,3.2,5,3.3,2.3];
// Função que mostra o carro no cenário 
function mostraCarro(){
  for(let i=0; i< imagensCarros.length;i++){
    image(imagensCarros[i],xCarro[i],yCarro[i],comprimentoCarro,alturaCarro);
  }
}
// Função que movimenta o carro 
function movimentaCarro(){
    for(let i=0; i< imagensCarros.length;i++){
     xCarro[i]-=velocidade[i];
  }
}
function voltaCarroPosicaoInicial(){
    for(let i=0; i< imagensCarros.length;i++){
       if(passouTodaTela(xCarro[i])){
    xCarro[i]=600
    }    
  }
}
function passouTodaTela(xCarro){
  return xCarro < -50; 
}