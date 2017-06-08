function Food(up, down, left, right) {

    // Intentionally not placing the food near the margins
    // (impossible to get at higher speeds)
    this.upM = up + 10;
    this.downM = down - 10;
    this.leftM = left + 10;
    this.rightM = right - 10;

    // Food's dimension and coordinates
    this.dim = floor((this.downM - this.upM) * 0.02);
    this.x = random(this.leftM, this.rightM);
    this.y = random(this.upM, this.downM);

    // The score
    this.score = 0;


    // Showing the food
    this.show = function() {
        fill(0, 255, 0);
        rectMode(CENTER);
        rect(this.x, this.y, this.dim, this.dim);
    }


    // This will update the food position if "isEaten == true"
    this.update = function() {
        if (this.isEaten == true) {
            this.score++;
            this.x = random(this.leftM, this.rightM);
            this.y = random(this.upM, this.downM);
        }
    }


    // Checking if the food is eaten or not
    this.eatCheck = function(x, y) {
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
