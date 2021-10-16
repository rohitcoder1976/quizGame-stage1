var canvas, backgroundImage;

var questions;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.start();
}


function draw(){
  background("pink");



  //textSize(20);
  //fill("red");
  //stroke("red");
  //text("x:"+mouseX+", y:"+mouseY,mouseX,mouseY);

}
