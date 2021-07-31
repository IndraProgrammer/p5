var nosex=0;
var nosey=0;
function preload(){
    clownnose=loadImage("https://i.postimg.cc/4NvQbGHS/clownnose.png");
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);

}
function modelLoaded(){
    console.log ("modelLoaded");
}
function draw(){
    image(video,0,0,300,300);
    image(clownnose,nosex-13,nosey-5,30,30);
}
function take_snapshot(){
    save("Filter.png");

}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("nosex="+results[0].pose.nose.x);
        console.log("nosey="+results[0].pose.nose.y);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
   }
}
