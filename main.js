song1 = "";
song2 = "";
song1status = "";
song2status = "";
RightWristX = 0;
LeftWristX = 0;
RightWristY = 0;
LeftWristY = 0;
LeftWristScore = 0;

function preload() {
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(600, 500)
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("PoseNet is Initialized");
}

function gotPoses(results) {
    if (results.lenght > 0) {
        console.log(results);
        LeftWristScore = results[0].pose.keypoints[9].score;

        LeftWristX = results[0].pose.LeftWrist.x;
        LeftWristY = results[0].pose.LeftWrist.y;
        console.log("LeftWristX = " + LeftWristX + "LeftWristY = " + LeftWristY);

        RightWristX = results[0].pose.RightWrist.x;
        RightWristY = results[0].pose.RightWrist.y;
        console.log("RightWristX = " + RightWristX + "RightWristY = " + RightWristY);
    }
}

function draw() {
    image(video, 0, 0, 600, 500);

    song1status = song1.isPlaying();

    fill("#FF0000");
    stroke("#FF0000");

    if (LeftWristScore > 0.2) {
        circle(LefttWristX, LefttWristY, 20);

        document.getElementById("song_name").innerHTML = "Song Name = Harry Potter Theme Song Remix";
    }
}
