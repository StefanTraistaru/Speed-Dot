function Food(up, down, left, right) {
    
    // Intentionally not placing the food near the margins
    // (impossible to get at higher speeds)
    this.upM = up + 10;
    this.downM = down - 10;
    this.leftM = left + 10;
    this.rightM = right - 10;
    
    // Food dimension
    this.dim = floor((this.downM - this.upM) * 0.02);
    
    
    // Showing the food
    this.show = function() {
        fill(0, 255, 0);
        rectMode(CENTER);
        rect(this.x, this.y, this.dim, this.dim);
    }
    
    
    // Food's x and y coordinates get new values if the current food is eaten
    this.getXY = function(x, y) {
        this.x = x;
        this.y = y;
    }
    
    
    // This will call de "getXY" function
    this.update = function() {
        if (this.isEaten == true) {
            food.getXY(random(this.leftM, this.rightM),
                   random(this.upM, this.downM));
        }
    }
    
    
    // Checking if the food is eaten or not
    this.eat = function(x, y) {
        this.limit = this.dim * 1.1;
        if (this.x + this.limit > x && this.x - this.limit < x) {
            this.eatx = 1;
        } else this.eatx = 0;
        if (this.y + this.limit > y && this.y - this.limit < y) {
            this.eaty = 1;
        } else this.eaty = 0;
        if (this.eatx == 1 && this.eaty == 1)
            this.isEaten = true;
        else this.isEaten = false;
    }

}