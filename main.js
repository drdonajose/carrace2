canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
CAR1_width=150;
CAR1_height=100;
CAR1_x=10;
CAR1_y=10;
background_image="racingcanvas.gif"
CAR1_image="CAR1.png";
CAR2_width=150;
CAR2_height=100;
CAR2_x=10;
CAR2_y=100;
CAR2_image="CAR2.png";
function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;
    CAR1_imgTag=new Image();
    CAR1_imgTag.onload=uploadCAR1;
    CAR1_imgTag.src=CAR1_image;
    CAR2_imgTag=new Image();
    CAR2_imgTag.onload=uploadCAR2;
    CAR2_imgTag.src=CAR2_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadCAR1(){
    ctx.drawImage(CAR1_imgTag,CAR1_x,CAR1_y,CAR1_width,CAR1_height);
}
function uploadCAR2(){
    ctx.drawImage(CAR2_imgTag,CAR2_x,CAR2_y,CAR2_width,CAR2_height);}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log (keyPressed);
    if(keyPressed=='38'){
        CAR1_up();
        console.log("up");
    }
    if(keyPressed=='40'){
        CAR1_down();
        console.log("down");
    }
    if(keyPressed=='37'){
        CAR1_left();
        console.log("left");
    }
    if(keyPressed=='39'){
        CAR1_right();
        console.log("right");
    }
    if(keyPressed=='87'){
        CAR2_up();
        console.log("w is pressed");
    }
    if(keyPressed=='83'){
        CAR2_down();
        console.log("s is pressed");
    }
    if(keyPressed=='65'){
        CAR2_left();
        console.log("a is pressed");
    }
    if(keyPressed=='68'){
        CAR2_right();
        console.log("d is pressed");
    }
    if(CAR1_x>=500){
        console.log("CAR1 Won");
        document.getElementById('game_status').innerHTML="CAR1 WINS";
    
    }
    if(CAR2_x>=500){
        console.log("CAR2 Won");
        document.getElementById('game_status').innerHTML="CAR2 WINS";
        
    }
}
function CAR1_up(){
    if(CAR1_y>=0){
        CAR1_y=CAR1_y-10;
        console.log("when up arrow is pressed,x="+CAR1_x+"/y="+CAR1_y);
        uploadBackground();
        uploadCAR1();
        uploadCAR2();
    }
}
function CAR1_down(){
    if(CAR1_y<=500){
        CAR1_y=CAR1_y+10;
        console.log("when  down arrow is pressed,x="+CAR1_x+"/y="+CAR1_y);
        uploadBackground();
        uploadCAR1();
        uploadCAR2();
    }
}
function CAR1_left(){
    if(CAR1_x>=0){
        CAR1_x=CAR1_x-10;
        console.log("when left arrow is pressed,x="+CAR1_x+"/y="+CAR1_y);
        uploadBackground();
        uploadCAR1();
        uploadCAR2();
    }
}
function CAR1_right(){
    if(CAR1_x<=700){
        CAR1_x=CAR1_x+10;
        console.log("when  right arrow is pressed,x="+CAR1_x+"/y="+CAR1_y);
        uploadBackground();
        uploadCAR1();
        uploadCAR2();
    }
}
function CAR2_up(){
    if(CAR2_y>=0){
        CAR2_y=CAR2_y-10;
        console.log("when up arrow is pressed,x="+CAR2_x+"/y="+CAR2_y);
        uploadBackground();
        uploadCAR1();
        uploadCAR2();
    }
}
function CAR2_down(){
    if(CAR2_y<=500){
        CAR2_y=CAR2_y+10;
        console.log("when  down arrow is pressed,x="+CAR2_x+"/y="+CAR2_y);
        uploadBackground();
        uploadCAR1();
        uploadCAR2();
    }
}
function CAR2_left(){
    if(CAR2_x>=0){
        CAR2_x=CAR2_x-10;
        console.log("when left arrow is pressed,x="+CAR2_x+"/y="+CAR2_y);
        uploadBackground();
        uploadCAR1();
        uploadCAR2();
    }
}
function CAR2_right(){
    if(CAR2_x<=700){
        CAR2_x=CAR2_x+10;
        console.log("when  right arrow is pressed,x="+CAR2_x+"/y="+CAR2_y);
        uploadBackground();
        uploadCAR1();
        uploadCAR2();
    }
}
