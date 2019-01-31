let img;
let pauliimg;

//From https://p5js.org/examples/input-constrain.html
var mx = 1;
var my = 1;
var easing = 0.05;
var radius = 24;
var edge = 100;
var inner = edge + radius;
//end referenced material

//From https://p5js.org/examples/input-easing.html
var x = 1;
var y = 1;
var easing = 0.05;
//end referenced material

var q = 1;
var w = 1;

var e = 1;
var r = 1;

let letter = 'z';

function preload(){
    img = loadImage('images/aaronphilip.png');
    pauliimg = loadImage('images/paulimurrayillus.PNG');
}

function setup(){
    
    createCanvas(1200, 600);
    background(255*(random()*hour()/24),255*(random()*minute()/60),255*(random()*second()/60));
    //From https://p5js.org/examples/input-constrain.html
    noStroke(); 
    ellipseMode(RADIUS);
    rectMode(CORNERS);
    //end referenced material

}

function draw(){
    if ( letter === 'a' ) {
        if(second() < 31){
            var bg = second();
        } else{
            var bg = 30 - (second() - 30);
        }

        //From https://p5js.org/reference/#/p5/lerpColor
        let from = color(255*3/100,255*15/100,255*3/100); // Aaron Philip's birthdate: 3/15/2001
        let to = color(255*hour()/24,255*minute()/60,255*second()/60);
        colorMode(RGB); 
        let interA = lerpColor(from, to, bg/30);
        //end referenced material
        
        colorMode(RGB);
        //From https://p5js.org/examples/input-constrain.html
        background(interA);

        if (abs(mouseX - mx) > 0.1) {
            mx = mx + (mouseX - mx) * easing;
        }
        if (abs(mouseY - my) > 0.1) {
            my = my + (mouseY- my) * easing;
        }

        mx = constrain(mx, inner, width - inner);
        my = constrain(my, inner, height - inner);
        //end referenced material

        //From https://p5js.org/examples/input-easing.html
        {
            var targetX = mouseX;
            var dx = targetX - x;
            x += dx * easing;

            var targetY = mouseY;
            var dy = targetY - y;
            y += dy * easing;
            //end referenced material

            image(img,100*x/800,100*y/800,img.width/3.3,img.height/3.3);
        }

        fill(interA);
        strokeWeight(3);
        stroke(230);
        //From https://p5js.org/examples/input-easing.html
        {
            var targetX = mouseX;
            var dx = targetX - x;
            x += dx * easing;

            var targetY = mouseY;
            var dy = targetY - y;
            y += dy * easing;
            //end referenced material

            text('Aaron Philip is a disabled, gender non-conforming trans girl. She is one of two models signed to a major agency in a wheelchair, and puts herself in the public spotlight to create space for other disabled and gender non-conforming people like her. I want to highlight Aaron in preparing for Black History Month because just as important as it is to reflect on our progress, it is equally important to praise those who carry our future.',
            400+(-50*x/800),100+(-50*y/800),790);

        }
        textFont('Arial',38);
        
    } else if ( letter === 'p' ) {
        if(second() < 31){
            var bg = second();
        } else{
            var bg = 30 - (second() - 30);
        }
        
        //From https://p5js.org/reference/#/p5/lerpColor
        let from = color(255*111/100,255*120/100,255*129/100); // Pauli Murray's birthdate: 11/20/1920
        let to = color(255*hour()/24,255*minute()/60,255*second()/60);
        colorMode(RGB); 
        let interA = lerpColor(from, to, bg/30);
        //end referenced material
        
        colorMode(RGB);
        //From https://p5js.org/examples/input-constrain.html
        background(interA);

        if (abs(mouseX - mx) > 0.1) {
            mx = mx + (mouseX - mx) * easing;
        }
        if (abs(mouseY - my) > 0.1) {
            my = my + (mouseY- my) * easing;
        }

        mx = constrain(mx, inner, width - inner);
        my = constrain(my, inner, height - inner);
    
        //end referenced material
        //From https://p5js.org/examples/input-easing.html
        {
            var targetX = mouseX;
            var dx = targetX - x;
            x += dx * easing;

            var targetY = mouseY;
            var dy = targetY - y;
            y += dy * easing;
            //end referenced material

            image(pauliimg,100*x/800,100*y/800,img.width/4.5,img.height/3.2);
        }

        fill(interA);
        strokeWeight(3);
        stroke(0);
        //From https://p5js.org/examples/input-easing.html
        {
            var targetX = mouseX;
            var dx = targetX - x;
            x += dx * easing;

            var targetY = mouseY;
            var dy = targetY - y;
            y += dy * easing;
            //end referenced material

            text('My classmates may recognize Pauli Murray from the many murals of her around Durham. She exemplified intersectionality, fighting against racism, misogyny, and homophobia. She questioned and challenged gender years before the discourse surrounding it today. I wanted to highlight Pauli because she is incredibly inspirational, and we should definitely learn from her example.',
            400+(-50*x/800),100+(-50*y/800),790);

        }
        textFont('Arial',38);

    } else if ( letter === 'z' ) {
        background(255*(hour()/24),255*(minute()/60),255*(second()/60));
    }
    
}

function keyTyped() {
    if ( key === 1) {
        letter = 'z';
    } else if ( key === 'a' ) {
        letter = 'a';
    } else if ( key === 'p' ) {
        letter = 'p';
    } else if ( key === 'z' ) {
        letter = 'z';
    }
}