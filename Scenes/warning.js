function Warning() {

    var sizeTxt;
    this.curScene = "Warning";
    this.restart = 0;

    this.setup = function() {
        if (windowHeight < windowWidth) sizeTxt = floor(windowHeight * 0.05);
        else sizeTxt = floor(windowWidth * 0.05);
    }

    this.draw = function() {
        if (this.curScene != "Warning") {
            this.setup();
            this.curScene = "Warning";
        }

        if (this.curScene === "Warning") {
            if (this.restart === 1) {
                if (windowWidth > 16/10 * windowHeight * 0.8) {
                    this.curScene = "Game";
                    this.restart = 0;
                    this.sceneManager.showScene(Game);
                }
                else this.restart = 0;
            }
            background(50);
            textSize(sizeTxt);
            textAlign(CENTER);
            textStyle(BOLD);
            fill(255);
            text("Please resize your window", windowWidth * 0.5, windowHeight * 0.45);
            textSize(sizeTxt * 0.6);
            text("Press SPACEBAR to restart", windowWidth/2, windowHeight * 0.6);
        }
    }

    this.keyPressed = function() {
        if (keyCode === 32) {
            this.restart = 1;
        }
    }

}
