let coin;

function setup() {
    createCanvas(windowWidth, windowHeight);
    coin = new Coin();
}

function draw() {
    background(0);
    coin.update();
}