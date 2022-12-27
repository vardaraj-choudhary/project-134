 alarm= "";
 status="";
 objects=[];
function preload(){
      alarm=Audio="red_alert.mp3";
   
}
function setup() { 
    canvas = createCanvas(380, 380); 
    canvas.center(); 
    video=createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}
function start(){

    objectDetector=ml5.objectDetector("cocossd",modalLoaded);
    document.getElementById("status").innerHTML="Status: Detecting objects";
}
function draw() { 
    image(video, 0, 0, 380, 380); 
    if(status != "")
  {  
    r=random(255);
    g=random(255);
    b=random(255);
     objectDetector.detect(video,gotResults);
    
    for(i=0; i<objects.length; i++){
        document.getElementById("status").innerHTML="Status:Baby found";
        fill(r,g,b);
        percent=float(objects[i].confidence*100)
        text(objects[i].label+" "+percent+"%",objects[i].x,objects[i].y);
        noFill();
        stroke(r,g,b);
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);

    }
    }
    else if(status=""){
           document.getElementById("status").innerHTML="status:baby not found"
    }
}
function modalLoaded(){
    console.log("modal loaded");
    status=true;
    console.log(status);
    
}
function gotResults(error,results){
    if (error) {
        console.error(error);
        
    } else { 
        console.log(results);
        objects=results;
    }
     
}