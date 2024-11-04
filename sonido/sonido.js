let sonido;

function preload(){
  soundFormats('mp3');
  sonido= loadSound('data/adventure.mp3');
}

function setup() {

  createCanvas(600,600);
  
  
   userStartAudio().then(() =>{
    sonido.play();
  });
}


function draw() {

}
