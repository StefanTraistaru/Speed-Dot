function Intro() {

    var sizeTxt;
    this.start = 0;
    this.curScene = "Intro";

    this.setup = function() {
        if (windowHeight < windowWidth) sizeTxt = floor(windowHeight * 0.08);
        else sizeTxt = floor(windowWidth * 0.08);
    }

    this.draw = function() {
        if (this.curScene != "Intro") {
            this.setup();
            this.curScene = "Intro";
        }

        if (this.curScene === "Intro") {
            if (this.start === 1) {
                if (windowWidth > 16/10 * windowHeight * 0.8) {
                    this.curScene = "Game";
                    this.start = 0;
                    this.sceneManager.showScene(Game);
                } else {
                    this.start = 0;
                    this.sceneManager.showScene(Warning);
                }
            }

            background(50);
            textSize(sizeTxt);
            textAlign(CENTER);
            textStyle(BOLD);
            fill(255);
            text("Speed Dot", windowWidth * 0.5, windowHeight * 0.33);

            imageMode(CENTER);
            image(this.sceneManager.bkImage, windowWidth/2, windowHeight * 0.4,
                    windowHeight * 0.13 * 3, windowHeight * 0.13);

            textSize(sizeTxt * 0.3);
            text("Press ENTER to start", windowWidth/2, windowHeight * 0.6);

            textSize(sizeTxt * 0.25);
            text("Made by Stefan Traistaru", windowWidth * 8/10, windowHeight * 0.95);
        }
    }


    this.keyPressed = function() {
        if (keyCode === ENTER) {
            this.start = 1;
        }
    }

}
