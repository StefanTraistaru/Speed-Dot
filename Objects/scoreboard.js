function ScoreBoard(width, height, padding) {
    this.width = width;
    this.height = height;
    this.padding = padding;
    
    this.show = function() {
        fill(70);
        rectMode(CENTER);
        rect(windowWidth/2, windowHeight - padding - this.height/2, this.width, this.height);
    }
    
}