var canvas = new fabric.Canvas("myCanvas");

player_x = 10;
player_y = 10;

block_image_height = 30;
block_image_width = 30 ;

var player_object = "";
var block_image = "";

function superhero()
{
    fabric.Image.fromURL("https://i.postimg.cc/zDwfFdYY/player.png",function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(160);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
    
}

function new_image (getimage)
{
    fabric.Image.fromURL(getimage,function(Img){
        block_image = Img;
       block_image.scaleToWidth(block_image_width);
        block_image.scaleToHeight(block_image_height);
        block_image.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image);
    });
    
}
window.addEventListener("keydown",my_keydown)
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey ==  true && keyPressed == "80"){
        block_image_height = block_image_height + 10;
        block_image_width = block_image_width + 10;
        document.getElementById("current_height").innerHTML = block_image_height;
        document.getElementById("current_width").innerHTML = block_image_width;
    }
    if(e.shiftKey == true && keyPressed == "77"){
        block_image_height = block_image_height - 10;
        block_image_width =block_image_width - 10;
        document.getElementById("current_height").innerHTML = block_image_height;
        document.getElementById("current_width").innerHTML = block_image_width;
    }
    if (keyPressed == "38"){
        up();
        console.log("up");
    }
    if(keyPressed == "37"){
        left();
        console.log("left");
    }
    if(keyPressed == "39"){
        right();
        console.log("right");
    }
    if(keyPressed == "40"){
        down();
        console.log("right");
    }
    if(keyPressed == "70"){
        new_image("https://i.postimg.cc/hGnyTPLB/ironman-face.png");
        console.log("f");
    }
    if (keyPressed == "66"){
        new_image("https://i.postimg.cc/FscwL6M0/spiderman-body.png")
        console.log("b");
    }
    if (keyPressed == "76"){
        new_image("https://i.postimg.cc/KzF6GDqt/hulk-legs.png")
        console.log("l");
    }
    if (keyPressed == "82"){
        new_image("https://i.postimg.cc/8s8BGtwS/thor-right-hand.png")
        console.log("r");
    }
    if (keyPressed == "72"){
        new_image("https://i.postimg.cc/rw7ckW29/captain-america-left-hand.png")
        console.log("h");
    }
}
function left(){
    if(player_x >0){
        player_x = player_x - block_image_width;
        canvas.remove(player_object);
        superhero();
    }
}
function right(){
    if(player_x <= 850){
        player_x = player_x + block_image_width;
      canvas.remove(player_object);
      superhero();
    }
}
function up(){
    if(player_y >= 0){
        player_y = player_y - block_image_height;
        canvas.remove(player_object);
        superhero();
    }
}
function down(){
    if(player_y <= 440){
        player_y = player_y + block_image_height;
        canvas.remove(player_object);
        superhero();
    }
}