function setup() {
    // game setup
    createCanvas(1500, 1500);
    
    // color setup
    let bc = color(234,172,145);
    let hc = color(166,147,127);
    
    // variable setup
    let hx = 560
    let hy = 300
    let hd = 75
    let hi = 0

    let hx1 = 560
    let hy1 = 390
    let hd1 = 75
    let hi1 = 0

    // board setup
    fill(bc);
    noStroke();
    rect(500, 100, 700, 300);
    rect(500, 350, 700, 250);
    fill(hc);
    noStroke();
    ellipse(830, 170, 500, 130)
    ellipse(830, 520, 500, 130)
    while(hi <= 6) {
        circle(hx, hy, hd)
        hx = hx + 90
        hi = hi + 1 
    }
    while(hi1 <= 6) {
        circle(hx1, hy1, hd1)
        hx1 = hx1 + 90
        hi1 = hi1 + 1 
    }
}

function draw() {

}