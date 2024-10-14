let Gambling, GamLose, GamWin, GamblingScalar, GamblingSize, GamLScalar, GamLSize, GamWScalar, GamWSize; GamblingTime

function preload() {
  Gambling= loadImage ("LetsGoGambling.webp");
  GamLose = loadImage ("GamblingLose.gif");
  GamWin = loadImage ("GamblingWin.gif");
}

function setup() {
  createCanvas(600,600);
  GamblingScalar = 290/360;
  GamblingSize = 100;
  GamLScalar = 426/240;
  GamLSize = 400;
  GamWScalar = 498/353;
  GamWSize = 400;
  GamblingTime = round(random());
}

function draw() {
  background (220);
  fill(0);
  textSize(70);
  text('Lets go gambling!', 20, 60)
  image (Gambling, 250, 100, GamblingSize, GamblingSize/GamblingScalar)

  if(GamblingTime){
    image(GamLose, 90, height/2);
    textSize(70);
    fill("red");
    text('Aww dang it!', 100, 290);
  } else {
    image(GamWin, 50, height/2);
    textSize(70);
    fill("green");
    text('HURRAY!!!', 100, 290);
  }
}