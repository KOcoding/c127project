function setup(){
    canvas=createCanvas(600,500)
    canvas.position(460,190);
    video=createCapture(VIDEO);
    video.hide()
    posenet=ml5.poseNet(video,modelLoaded)
    posenet.on("pose",gotresult);
}
function gotresult(results){
    if(results.length>0){
        console.log(results)
        leftwristx=results[0].pose.leftWrist.x
        leftwristy=results[0].pose.leftWrist.y
        rightwristx=results[0].pose.rightWrist.x
        rightwristy=results[0].pose.rightWrist.y
        console.log("leftwristx = "+leftwristx+" leftwristy="+leftwristy)
        console.log("rightwristx = "+rightwristx+" rightwristy="+rightwristy)
    }
}
leftwristx=0
leftwristy=0
rightwristx=0
rightwristy=0
function modelLoaded(){
    console.log("Model has initialized.");
}
function draw(){
    image (video,0,0,600,500)
}
song1=""
song2=""
function preload(){
    song1=loadSound("song1.mp3")
    song2=loadSound("song2.mp3")
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1)
}