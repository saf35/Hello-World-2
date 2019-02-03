let img;
let pauliimg;
let starimg;
let rat;
let imageHeight;
let imageWidth;
// let starsize;
let starWorks = [];

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
    starimg = loadImage('images/star.png');
}

function setup(){
    
    createCanvas(windowWidth, windowHeight);
    background(255*(random()*hour()/24),255*(random()*minute()/60),255*(random()*second()/60));
    //From https://p5js.org/examples/input-constrain.html
    noStroke(); 
    ellipseMode(RADIUS);
    rectMode(CORNERS);
    //end referenced material

}

function draw(){
    if ( letter === 'a' ) { // Display Aaron Philip page
        if(second() < 31){ // Acceleration of color change depends on time (sec)
            var bg = second();
        } else{
            var bg = 30 - (second() - 30);
        }

        // Setting changing color
        //From https://p5js.org/reference/#/p5/lerpColor
        let from = color(255*3/100,255*15/100,255*3/100); // Based on Aaron Philip's birthdate: 3/15/2001
        let to = color(255*hour()/24,255*minute()/60,255*second()/60);
        colorMode(RGB); 
        let interA = lerpColor(from, to, bg/30);
        //end referenced material
        
        colorMode(RGB);
        //From https://p5js.org/examples/input-constrain.html
        background(interA);

        
        
        // Adding easing on movement of image with mouse
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

            image(img,100*x/800,100*y/800,img.width/2.8,img.height/2.8);
        }

        // Adding same properties to text
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

            rat = 4.5/3.2; // ratio between image height and width
            imageHeight = 2.8; 
            imageWidth = imageHeight*rat;

            image(pauliimg,100*x/800,100*y/800,img.width/imageWidth,img.height/imageHeight);
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
            400+(-50*x/800),100+(-50*y/800),900);

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

function starFireworks(starW,starH){
    constructor(){
        this.w = starW;
        this.h = starH;
    }

    display(){
        // starsize = 100;
        starWorks[i] = image(starimg,100,100,this.w,this.h);
    }
}

// Setting fireworks-like animation behind illustration and text
for(let i=0; i < 20; i++){ // random placement of stars
    
    starpc = 0.1*starsize; // 10% of starsize
    for( let j = 0; j < 10; j++){ // decreasing size of stars
        starWorks[i] = image(starimg,starsize,starsize,windowWidth*random(),windowHeight*random());
        starsize = starsize - starpc;
    }
    if(i===19){
        i = 0;
    }
}
