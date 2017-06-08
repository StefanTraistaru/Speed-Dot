function Game() {

    // Objects
    var dot;
    var food;
    var surface;
    var margins;
    var scoreBoard;

    // Variables
    var gameWidth;
    var gameHeight;
    var wall;
    var boardHeight;
    var padding;

    // this variable is used to decide if I should draw or not this scene
    this.curScene = "Game";

    this.setup = function() {
        // Calculating game dimensions
        gameHeight = windowHeight * 0.8;
        // Setting a gameWidth / gameHeight ratio of 16:10
        gameWidth = 16/10 * gameHeight;
        wall = gameHeight * 0.02;
        boardHeight = windowHeight * 0.1;
        padding = windowHeight * 0.04;

        // Creating objects
        surface = new Surface(gameWidth, gameHeight, wall, padding);
        margins = new Surface(gameWidth, gameHeight, 0, padding);
        scoreBoard = new ScoreBoard(gameWidth, boardHeight, padding);
        dot = new Dot(padding + wall/2, padding + (gameHeight - wall/2) ,
                      windowWidth/2 - (gameWidth-2*wall)/2,
                      windowWidth/2 + (gameWidth-2*wall)/2);
        food = new Food(padding + wall/2, padding + (gameHeight - wall/2) ,
                        windowWidth/2 - (gameWidth-2*wall)/2,
                        windowWidth/2 + (gameWidth-2*wall)/2);

        // Initial Settings
        // Setting the textSize according to the smaller between windowWidth and windowHeight
        if (windowHeight < windowWidth) sizeTxt = floor(windowHeight * 0.065);
        else sizeTxt = floor(windowWidth * 0.065);
        // If the entire playable area can't be displayed this will redirect
        // the game to the ending screen
        if (gameWidth > windowWidth) {
            dot.isDead = true;
        }
    }

    this.draw = function() {
        // This will reset the game
        if (this.curScene != "Game") {
            this.setup();
            this.curScene = "Game";
        }

        // The main draw loop
        if (this.curScene === "Game") {

            if (dot.isDead === true) {
                this.curScene = "EndScreen";
                this.sceneManager.showScene(EndScreen);
            }

            background(50, 50, 50);
            margins.show(255);
            surface.show(0);
            scoreBoard.show();

            // Dot + Food
            food.show();
            dot.show();

            // Updating objects
            food.eatCheck(dot.x, dot.y);
            if (food.isEaten)   dot.levelUp();
            food.update();
            dot.move();
            dot.update();

            // Displaying the score
            textSize(sizeTxt);
            textAlign(CENTER);
            textStyle(BOLD);
            text("Score: " + food.score, windowWidth/2, windowHeight - padding/2 - boardHeight/2);
        }
    }

    this.getScore = function() {
        return food.score;
    }

    this.keyPressed = function() {
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
}
