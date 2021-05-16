function setup() {
  createCanvas(800,600);
  background(0, 212, 255 );
  noStroke();

   //Sun
   noStroke();
   fill(247, 255, 0);
   ellipse(800,30,300,300);
   stroke(0);

   //GrassLand
   fill(21, 133, 21);
   rect(0, 500, 900, 100);

   //Main Castle
   fill(184, 103, 0);
   triangle(40, 105, 100, 10, 170, 105);
   rect(40, 105, 130, 400);
   rect(170 ,140,500,365);
   rect(670, 105, 130, 400);
   triangle(670, 105, 730, 10, 800, 105);
   rect(220, 110, 30, 30);
   rect(290, 110, 30, 30);
   rect(360, 110, 30, 30);
   rect(430, 110, 30, 30);
   rect(500, 110, 30, 30);
   rect(570, 110, 30, 30);

   //door
   fill(119, 67, 16 );
   rect(337,293,170,210);

   //Windows
   fill(109, 116, 121 );
   rect(230, 200, 60, 60);
   rect(550, 200, 60, 60);
   rect(690, 200, 90, 60);
   rect(60, 200, 90, 60);
   

  

 
}

function draw() { 
  drawSprites();
}