function setup() {
    // game setup
    createCanvas(4000, 4000);
    
    // color setup
    let bc = color(234,172,145);
    let hc = color(166,147,127);
    
    // board setup
    fill(bc);
    noStroke();
    rect(500, 100, 700, 300);
    fill(hc);
    noStroke();
    ellipse(830, 170, 500, 130)
    circle(560, 300, 75);
    circle(650, 300, 75);
    circle(740, 300, 75);
    circle(830, 300, 75);
    circle(920, 300, 75);
    circle(1010, 300, 75);
    circle(1100, 300, 75);
    line(500, 250, 1100, 300)
    fill(bc);
    noStroke();
    rect(500, 350, 700, 250);
    fill(hc);
    noStroke();
    ellipse(830, 520, 500, 130)
    circle(560, 390, 75);
    circle(650, 390, 75);
    circle(740, 390, 75);
    circle(830, 390, 75);
    circle(920, 390, 75);
    circle(1010, 390, 75);
    circle(1100, 390, 75);
}

function draw() {

}