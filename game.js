var xblock;
var yblock;
var xSize = 765;
var ySize = 630;
var muuren = [];
var aantalmuuren = 10;
//var finish = [];
var finish1;
var player1;

function setup() {
  createCanvas(xSize, ySize);
  xblock = 0
  yblock = 0
  player1 = new Player(0, 0, 30, 30);
  finish1 = new Finish(710, 575, 55, 55);
  //finish.push(finish1);
  muur1 = new Muur(55,0, 150, 50);
  muuren.push(muur1);
  muur2 = new Muur(0,205, 50, 205);
  muuren.push(muur2);
  muur3 = new Muur(155,55, 150, 50);
  muuren.push(muur3);
  muur4 = new Muur(255,0, 310, 50);
  muuren.push(muur4);
  muur5 = new Muur(55,310, 50, 250);
  muuren.push(muur5);
  muur6 = new Muur(0,415, 50, 705);
  muuren.push(muur6);
  muur7 = new Muur(360,65, 400, 50);
  muuren.push(muur7);
  muur8 = new Muur(360,65, 50, 345);
  muuren.push(muur8);
  muur9 = new Muur(705,65, 400, -300);
  muuren.push(muur9);
  muur10 = new Muur(55,525, 50, 720);
  muuren.push(muur10);
  muur11 = new Muur(-1, -1, 630, 1);
  muuren.push(muur11);
  muur12 = new Muur(-1, -1, 1, 765);
  muuren.push(muur12);
  muur13 = new Muur(766, -1, 630, 1);
  muuren.push(muur13);
  muur14 = new Muur(-1, 631, 1, 765);
  muuren.push(muur14);
}

function draw() {
    background(0);
    drawblock(xblock, yblock);
    for (var i = 0; i < muuren.length; i++){
      muur = muuren[i];
      muur.teken();
      player1.collision(muur);
    }
	  finish1.teken();
  	player1.display();
  	player1.move();
    player1.collision(finish1);
 // for (var i = 0; i < finish.length; i++){
 //   finisha = finish[i];
 //   finisha.teken();
 // }

    yblock += 0.5;
  	xblock += 0.5;
};


function Muur (_x, _y, _h, _b) {
	this.x = _x;
  this.y = _y;
  this.h = _h;
  this.b = _b;
  this.teken = function () {
    fill('red');
		noStroke();
    rect(this.x,this.y, this.b, this.h);
  }
}

function Finish (_x, _y, _h, _b) {
	this.x = _x;
  this.y = _y;
  this.h = _h;
  this.b = _b;
  this.teken = function () {
    fill('green');
		noStroke();
    rect(this.x,this.y, this.b, this.h);

    //this.collision = function(ander) {
    //	if (!(ander.x > Player + h || Player > Finish + h || y2 > y1 + b || y1 > y2 + b)){
  //			console.log("aaa")
	//		}
  	}
	}
function drawblock(xblock, yblock){
    noStroke();
//		fill('red');
//    rect(xblock, yblock, 30, 30);
}

function myRestart(){
	player1.xpos = 1;
	player1.ypos = 1;
}

function Player() {
  this.playerHeight = 30;
  this.playerWidth = 30;
  this.radius = 30;
  this.xpos = 1;
  this.ypos = 1;
  this.speed = 3;

  this.display = function() {
    fill('green');
    rect(this.xpos, this.ypos, this.radius, this.radius);
  }

  this.move = function() {
      // Pas op dat je speler hiermee uit het veld kan lopen!
      // Pas de code aan zodat dat niet kan gebeuren
      if (keyIsDown(UP_ARROW)){

        this.ypos -= this.speed;
      } else if (keyIsDown(DOWN_ARROW)){
        this.ypos += this.speed;
      } else if (keyIsDown(LEFT_ARROW)){
        this.xpos -= this.speed;
      } else if (keyIsDown(RIGHT_ARROW)){
        this.xpos += this.speed;
      }

  }

  this.collision = function(ander) {
    // if (!(x2 > x1 + lengte || x1 > x2 + lengte || y2 > y1 + breedte || y1 > y2 + breedte)){
    if (!(ander.x > this.xpos + this.playerWidth || this.xpos > ander.x + ander.b || ander.y > this.ypos + this.playerHeight || this.ypos > ander.y + ander.h)){
  		console.log("a")
      myRestart();
		}
    //console.log(ander.x)
  }
}
