var img;

function preload() {
    img = loadImage('http://i.imgur.com/TjoCoye.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    var mgr = new SceneManager();
    mgr.bkImage = img;
    mgr.wire();
    mgr.showScene(Intro);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
