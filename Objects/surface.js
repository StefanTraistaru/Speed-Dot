function Surface(width, height, error, padding) {
    
    this.width = width;
    this.height = height;
    this.error = error;
    this.padding = padding;
    
    this.show = function(color) {
        fill(color);
        rectMode(CENTER);
        
        rect(floor(windowWidth/2), floor(this.padding + this.height/2),
             floor(this.width - this.error), floor(this.height - this.error));
    }
    
}