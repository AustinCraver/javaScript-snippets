// hair 
fill(170, 29, 29);
rect(101, 21, 195, 156, 10);

// face
var strokeColor = color(201, 188, 4);
var fillColor = color(235, 214, 76);

// draw an ellipse
stroke(strokeColor);
strokeWeight(1);
fill(fillColor);
ellipse(200, 200, 196, 285);

// eyebrows
stroke(161, 110, 74);
arc(150, 145, 24, 10, 180, 360);
arc(250, 145, 24, 10, 180, 360);

// eyes
stroke(252, 50, 252);
fill(33, 10, 10);
ellipse(150, 160, 34, 20);
ellipse(250, 160, 34, 20);

// pupils
noStroke();
fill(250, 250, 250);
ellipse(150, 160, 8, 8);
ellipse(250, 160, 8, 8);

// mouth
fill(2, 36, 2);
arc(201, 250, 115, 86, 1, 180);

for (var i = 0; i < 6; i++){
var windows = getImage("avatars/leaf-red");
image(windows, (i*37 + 78), (-1), 76,64);
}

// nose
stroke(89, 19, 19);
line(192, 176, 218, 204);
line(191, 204, 218, 204);

