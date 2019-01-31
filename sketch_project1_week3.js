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
        //From https://p5js.org/examples/input-constrain.html
        background(200,30,70);

        if (abs(mouseX - mx) > 0.1) {
            mx = mx + (mouseX - mx) * easing;
        }
        if (abs(mouseY - my) > 0.1) {
            my = my + (mouseY- my) * easing;
        }

        mx = constrain(mx, inner, width - inner);
        my = constrain(my, inner, height - inner);
        fill(200,195+minute(),70+second());
        rect(edge, edge, width-edge, height-edge);
        fill(255);
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

        //From https://p5js.org/reference/#/p5/lerpColor
        colorMode(RGB);
        let from = color(200,30,70);
        let to = color(200,195+minute(),70+second());
        colorMode(RGB); 
        let interA = lerpColor(from, to, 0.33);
        //end referenced material

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
        //From https://p5js.org/examples/input-constrain.html
        background(180);

        if (abs(mouseX - mx) > 0.1) {
            mx = mx + (mouseX - mx) * easing;
        }
        if (abs(mouseY - my) > 0.1) {
            my = my + (mouseY- my) * easing;
        }

        mx = constrain(mx, inner, width - inner);
        my = constrain(my, inner, height - inner);
        fill(100,70+minute(),70+second());
        rect(edge, edge, width-edge, height-edge);
        fill(255);
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

        //From https://p5js.org/reference/#/p5/lerpColor
        colorMode(RGB);
        let from = color(180);
        let to = color(100,70+minute(),70+second());
        colorMode(RGB); 
        let interA = lerpColor(from, to, 0.5);
        //end referenced material

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