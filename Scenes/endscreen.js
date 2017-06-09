function EndScreen() {

    var ogame;
    var score;
    var bestScore = 0;
    var nhs = 0; // New High Score
    var sizeTxt;
    this.curScene = "EndScreen";
    this.restart = 0;
    this.mainMenu = 0;

    this.setup = function() {
        // Setting the textSize according to the smaller between windowWidth and windowHeight
        if (windowHeight < windowWidth) sizeTxt = floor(windowHeight * 0.06);
        else sizeTxt = floor(windowWidth * 0.06);

        // Getting the score from the game scene
        ogame = this.sceneManager.findScene(Game).oScene;
        this.score = ogame.getScore();

        nhs = 0;
    }


    this.draw = function() {
        // This will reset the EndScreen
        if (this.curScene != "EndScreen") {
            this.setup();
            this.curScene = "EndScreen";
        }

        // The main draw loop
        if (this.curScene === "EndScreen") {
            if (this.restart === 1) {
                if (windowWidth > 16/10 * windowHeight * 0.8) {
                    this.curScene = "Game";
                    this.restart = 0;
                    this.sceneManager.showScene(Game);
                } else {
                    this.restart = 0;
                    this.curScene = "Warning";
                    this.sceneManager.showScene(Warning);
                }
            }

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
                text("Best score: " + bestScore, windowWidth/2 * 0.7, windowHeight * 0.4);
                text("Your score: " + this.score, windowWidth/2 * 1.3, windowHeight * 0.4);
            }
            else {
                textSize(sizeTxt * 0.75);
                text("Your score: " + this.score, windowWidth/2, windowHeight * 0.4);
            }
            textSize(sizeTxt * 0.5);
            text("Press SPACEBAR to restart", windowWidth/2, windowHeight * 0.8);
        }

    }

    this.keyPressed = function() {
        if (keyCode === 32) {
            this.restart = 1;
        }
    }
}
