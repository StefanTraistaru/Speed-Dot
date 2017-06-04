function Dot(up, down, left, right) {
    this.upM = up;
    this.downM = down;
    this.leftM = left;
    this.rightM = right;
    
    // Dimension is 2% of playable surface
    this.dim = floor((this.downM - this.upM) * 0.02);
    // Speed is 10% of initial dimension
    this.speed = ceil(this.dim * 0.1);
    this.increment = this.dim * 0.05;
    
    // Setting the initial coordinates at 50%width and 40%(playable surface height)
    // 50% windwWidth == 50%(playable surface width)
    this.x = floor(windowWidth/2);
    this.y = floor((this.downM - this.upM)/2 + windowHeight * 0.04);
    
    // Setting the first direciton to 'right'
    this.xdir = 1;
    this.ydir = 0;
    
    
    // Function for showing my dot
    this.show = function() {
        fill(255);
        noStroke();
        rectMode(CENTER);
        rect(this.x, this.y, this.dim, this.dim);
    }
    
    
    // Using this to set the direction in which the dot is going
    // It can't go to the opposite direction of the current direction
    this.setDir = function(dirx, diry) {
        if (this.xdir == 0 && dirx != 0) {
            this.xdir = dirx;
            this.ydir = diry;
        } else if (this.ydir == 0 && diry != 0) {
            this.xdir = dirx;
            this.ydir = diry;
        }
    }
    
    
    // Updating dot's x and y coordinates according to the direction and speed
    this.move = function() {
        this.x += this.xdir * this.speed;
        this.y += this.ydir * this.speed;
    }
    
    
    var limit = floor(this.dim * 0.475);
    // Verifing if the dot is x_x(DEAD) = if it hits the margins
    this.update = function() {
        if(this.x < (this.leftM + limit) || this.x > (this.rightM - limit))
            this.speed = 0;
        if(this.y < (this.upM + limit) || this.y > (this.downM - limit))
            this.speed = 0;       
    }
    
    
    // Increasing the speed
    this.levelUp = function() {
        this.speed += this.increment;
    }
    
}