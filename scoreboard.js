function ScoreBoard(x, y, z) {
    this.width = x;
    this.height = y;
    this.padding = z;
    
    this.show = function() {
        fill(70);
        rectMode(CENTER);
        rect(windowWidth/2, windowHeight - padding - this.height/2, this.width, this.height);
    }
    
}