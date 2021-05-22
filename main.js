song="";
function preload(){
    song=loadSound("La+Casa+De+Papel+Bella+Ciao+Lyrics]+Money+Heist.mp3");
}
function setup(){
    canvas=createCanvas(600,600);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide()
}
function draw(){
    image(video,0,0,600,600);
}
function play(){
    song.play();
}