//Create a reference for canvas 
canvas= document.getElementById('myCanvas')
ctx= canvas.getContext("2d")
//Give specific height and width to the car image
greenCar_width= 75
greenCar_height= 100
background_image = "background.jpg";
greenCar_image = "greenCar.png";

//Set initial position for a car image.
greenCar_x= 5
greenCar_y= 225
function add() {
	//upload car, and background images on the canvas.
	background_imgTag= new Image()
	background_imgTag.onload= uploadBackground
	background_imgTag.src= background_image

	greenCar_imgTag= new Image()
	greenCar_imgTag.onload= uploadgreenCar
	greenCar_imgTag.src= greenCar_image
}

function uploadBackground() {
	//Define function ‘uploadBackground’
ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height)
}

function uploadgreenCar() {
	//Define function ‘uploadgreencar’.
ctx.drawImage(greenCar_imgTag, greenCar_x, greenCar_y, greenCar_width, greenCar_height)
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if(greenCar_y>=0){
		greenCar_y= greenCar_y-10
		console.log("when up arrow is pressed, x="+ greenCar_x+"|y="+greenCar_y)
		uploadBackground()
		uploadgreenCar()
	}

}

function down()
{
	//Define function to move the car downward
	if(greenCar_y<=400){
		greenCar_y= greenCar_y+10
		console.log("when down arrow is pressed, x="+ greenCar_x+"|y="+greenCar_y)
		uploadBackground()
		uploadgreenCar()
	}

}

function left()
{
	//Define function to move the car left side
	greenCar_x= greenCar_x-10
		console.log("when right arrow is pressed, y="+ greenCar_y+"|x="+greenCar_x)
		uploadBackground()
		uploadgreenCar()
}

function right()
{
	//Define function to move the car right side
	greenCar_x= greenCar_x+10
		console.log("when left arrow is pressed, y="+ greenCar_y+"|x="+greenCar_x)
		uploadBackground()
		uploadgreenCar()
}
