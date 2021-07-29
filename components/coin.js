function Coin() {
    this.width = 20;
    this.height = 20;

    this.render = function () {
        fill("white");
        noStroke();
        ellipse(width / 2, height / 2, this.width, this.height)
    }

    this.update = function () {
        this.render();
    }
}