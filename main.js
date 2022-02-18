function preload() { }
function setup() {
    canvas = createCanvas(400, 400);
    video = createCapture(VIDEO);
    canvas.center();
    video.hide();
}

function take_snapshot() {
    save("Image.png");
}

function draw() {
    image(video, 10, 30, 300, 300);
    fill("red");
    stroke("blue");
    rect(0, 20, 320, 20);
    rect(0, 320, 320, 20);
    rect(0, 20, 20, 320);
    rect(300, 20, 20, 320);


    fill("green");
    stroke("purple");
    circle(22, 35, 50);
    circle(300, 35, 50);
    circle(22, 325, 50);
    circle(300, 325, 50);


}