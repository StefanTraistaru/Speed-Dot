// Objects
var dot;
var food;
var surface;
var margins;
var scoreBoard;

// Variables
var score;
var bestScore = 0;
var nhs = 0; // New High Score
var gameWidth;
var gameHeight;
var wall;
var boardHeight;
var padding;
var sizeTxt;


function setup() {
    createCanvas(windowWidth, windowHeight);
    resetGame();
}


function draw() {
    
    // Early implemention of the 2 main scenes:
    // the game and the ending screen
    if (dot.speed == 0) {
    
        background(50, 50, 50);
        fill(255);
        
        textAlign(CENTER);
        textStyle(BOLD);
        
        if (bestScore < this.score) {
            bestScore = this.score;
            nhs = 1;
        }
        if (nhs == 1) {
            textSize(sizeTxt);
            text("New High Score!", windowWidth/2, windowHeight * 0.2);
        }
        
        if (bestScore != 0) {
            textSize(sizeTxt * 0.75);
            text("Best score: " + bestScore, windowWidth/2 * 0.8, windowHeight * 0.4);
            text("Your score: " + this.score, windowWidth/2 * 1.2, windowHeight * 0.4);
        }
        else {
            textSize(sizeTxt * 0.75);
            text("Your score: " + this.score, windowWidth/2, windowHeight * 0.4);
        }
        textSize(sizeTxt * 0.5);
        text("Press SPACEBAR to restart", windowWidth/2, windowHeight * 0.8);
        
        if (keyIsDown(32)) {
            resetGame();
            nhs = 0;
        }
        
        // Position of the score
        textSize(sizeTxt * 0.25);
        text("Made by Stefan Traistaru", windowWidth * 9/10, windowHeight * 0.95);
    }
    else {
        background(50, 50, 50);
        margins.show(255);
        surface.show(0);
        scoreBoard.show();
        
        // Dot + Food
        food.show();
        dot.show();

        // Updating objects
        food.eat(dot.x, dot.y);
        if (food.isEaten) {
            dot.levelUp();
            this.score++;
        }
        food.update();
        dot.move();
        dot.update();
        
        textSize(sizeTxt);
        textAlign(CENTER);
        textStyle(BOLD);
        text("Score: " + this.score, windowWidth/2, windowHeight - padding/2 - boardHeight/2);
    }

}

function resetGame() {
    
    // Calculating game dimensions
    gameHeight = windowHeight * 0.8;
    gameWidth = windowWidth * 0.6;
    wall = gameHeight * 0.02;
    boardHeight = windowHeight * 0.1;
    padding = windowHeight * 0.04;
    
    // Creating objects
    surface = new Surface(gameWidth, gameHeight, wall, padding);
    margins = new Surface(gameWidth, gameHeight, 0, padding);
    scoreBoard = new ScoreBoard(gameWidth, boardHeight, padding);
    dot = new Dot(padding + wall, padding + (gameHeight - wall) , 
                  windowWidth/2 - (gameWidth-2*wall)/2, windowWidth/2 + (gameWidth-2*wall)/2);
    food = new Food(padding + wall, padding + (gameHeight - wall) , 
                    windowWidth/2 - (gameWidth-2*wall)/2, windowWidth/2 + (gameWidth-2*wall)/2);
    
    // Initial Settings
    score = 0;
    sizeTxt = floor(windowHeight * 0.065);
    
    // Cheap and less time consuming solution for diplaying the first piece of food
    // Don't judge me
    food.isEaten = true;
    food.update();
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function keyPressed() {
    if (keyCode === UP_ARROW) {
        dot.setDir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        dot.setDir(0, 1);
    } else if (keyCode === LEFT_ARROW) {
        dot.setDir(-1, 0);
    } else if (keyCode === RIGHT_ARROW) {
        dot.setDir(1, 0);
    }
}