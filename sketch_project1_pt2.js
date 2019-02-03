let img;
let pauliimg;
let starimg;
let rat;
let imageHeight;
let imageWidth;
let starsize;
let starWorks = [];
let star1;
// From https://p5js.org/examples/hello-p5-drawing.html
    // All the paths
    let paths = [];
    // Are we painting?
    let painting = false;
    // How long until the next circle
    let next = 0;
    // Where are we now and where were we?
    let current;
    let previous;
//end referenced material

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

    // star1 = new starFireworks(100);

    // From https://p5js.org/examples/hello-p5-drawing.html
    current = createVector(0,0);
    previous = createVector(0,0);
    // end referenced material
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

        // From https://p5js.org/examples/hello-p5-drawing.html
            // If it's time for a new point
            if (millis() > next && painting) {

                // Grab mouse position      
                current.x = mouseX;
                current.y = mouseY;

                // New particle's force is based on mouse movement
                let force = p5.Vector.sub(current, previous);
                force.mult(0.05);

                // Add new particle
                paths[paths.length - 1].add(current, force);
                
                // Schedule next circle
                next = millis() + random(100);

                // Store mouse values
                previous.x = current.x;
                previous.y = current.y;
            }

            // Draw all paths
            for( let i = 0; i < paths.length; i++) {
                paths[i].update();
                paths[i].display();
            }
        // end of referenced material

        /*
        star1.smallerSize();
        star1.display();
        */
        
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

        // From https://p5js.org/examples/hello-p5-drawing.html
            // If it's time for a new point
            if (millis() > next && painting) {

                // Grab mouse position      
                current.x = mouseX;
                current.y = mouseY;

                // New particle's force is based on mouse movement
                let force = p5.Vector.sub(current, previous);
                force.mult(0.05);

                // Add new particle
                paths[paths.length - 1].add(current, force);
                
                // Schedule next circle
                next = millis() + random(100);

                // Store mouse values
                previous.x = current.x;
                previous.y = current.y;
            }

            // Draw all paths
            for( let i = 0; i < paths.length; i++) {
                paths[i].update();
                paths[i].display();
            }
        // end of referenced material

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

        // From https://p5js.org/examples/hello-p5-drawing.html
            // If it's time for a new point
            if (millis() > next && painting) {

                // Grab mouse position      
                current.x = mouseX;
                current.y = mouseY;

                // New particle's force is based on mouse movement
                let force = p5.Vector.sub(current, previous);
                force.mult(0.05);

                // Add new particle
                paths[paths.length - 1].add(current, force);
                
                // Schedule next circle
                next = millis() + random(100);

                // Store mouse values
                previous.x = current.x;
                previous.y = current.y;
            }

            // Draw all paths
            for( let i = 0; i < paths.length; i++) {
                paths[i].update();
                paths[i].display();
            }
        // end of referenced material
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

/*
class starFireworks {
    constructor(starIS){
        this.inSi = starIS; // initial size
    }

    transp(){ // Make transparent
        this.dcSi = .0001*this.inSi; // decrease in size each iteration
        this.nS = this.inSi; // new size each iteration
        for(let a = 0; a < 10000; a++){
            this.nS = this.nS - this.dcSi;
        }
    }

    display(){
        starWorks = image(starimg,random()*windowWidth,random()*windowHeight,this.inSi,this.inSi);
    }
}
*/

// From https://p5js.org/examples/hello-p5-drawing.html
    // Start it up
    function mousePressed() {
    next = 0;
    painting = true;
    previous.x = mouseX;
    previous.y = mouseY;
    paths.push(new Path());
    }

    // Stop
    function mouseReleased() {
    painting = false;
    }

    // A Path is a list of particles
    class Path {
        constructor() {
            this.particles = [];
            this.hue = random(100);
        }

        add(position, force) {
            // Add a new particle with a position, force, and hue
            this.particles.push(new Particle(position, force, this.hue));
        }
        
        // Display plath
        update() {  
            for (let i = 0; i < this.particles.length; i++) {
            this.particles[i].update();
            }
        }  
        
        // Display plath
        display() {    
            // Loop through backwards
            for (let i = this.particles.length - 1; i >= 0; i--) {
            // If we shold remove it
            if (this.particles[i].lifespan <= 0) {
                this.particles.splice(i, 1);
            // Otherwise, display it
            } else {
                this.particles[i].display(this.particles[i+1]);
            }
            }
        
        }  
    }

    // Particles along the path
    class Particle {
        constructor(position, force, hue) {
            this.position = createVector(position.x, position.y);
            this.velocity = createVector(force.x, force.y);
            this.drag = 0.95;
            this.lifespan = 255;
        }

        update() {
            // Move it
            this.position.add(this.velocity);
            // Slow it down
            this.velocity.mult(this.drag);
            // Fade it out
            this.lifespan--;
        }

        // Draw particle and connect it with a line
        // Draw a line to another
        display(other) {
            stroke(0, this.lifespan/2);
            fill(0, this.lifespan/2);    
            image(starimg,this.position.x,this.position.y,50,50);    
            // If we need to draw a line
            if (other) {
                line(this.position.x, this.position.y, other.position.x, other.position.y);
            }
        }
    }
// end referenced material

