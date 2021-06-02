nosex = 0;
nosey = 0;
leftwristy = 0;
rightwristy = 0;
diffrence = 0;

function setup() {
    canvas = createCanvas(550, 500);
    canvas.position(560, 150);
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position();
    classifier = ml5.poseNet(video, modelloaded);
    classifier.on('pose', gotresults);
}

function draw() {
    background('#6C91C2');
    document.getElementById("square_side").innerHTML = "Font size of the text will be = " + diffrence + "px";
    textSize(diffrence);
    fill('#FFE787');
    text('Peter', 50, 400);
}

function modelloaded() {
    console.log("model loaded successfully");
}

function gotresults(r) {
    if (r.length > 0) {
        //console.log(r);
        nosex = r[0].pose.nose.x;
        nosey = r[0].pose.nose.y;
        leftwristy = r[0].pose.leftWrist.y;
        rightwristy = r[0].pose.rightWrist.y;
        diffrence = Math.floor(leftwristy - rightwristy);
        console.log(diffrence);
    }
}