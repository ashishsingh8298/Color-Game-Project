var numSquare=6;
var colors=generateRandomColors(numSquare);
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");


easyBtn.addEventListener("click",function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");

	colors=generateRandomColors(3);
	pickedColor=pickColor();
	numSquare=3;
	colorDisplay.textContent=pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
});

hardBtn.addEventListener("click",function(){

	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquare=6;
	colors=generateRandomColors(6);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor=colors[i];
		squares[i].style.display="block";
	}
});


resetButton.addEventListener("click",function(){
	colors=generateRandomColors(numSquare);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	this.textContent="NEW COLORS";
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor=colors[i];
	}
	messageDisplay.textContent="";
	h1.style.backgroundColor="steelblue";

});

colorDisplay.textContent=pickedColor;

for (var i =0; i <squares.length; i++) {
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click",function(){
		var clickedColor=this.style.backgroundColor;
		if(clickedColor === pickedColor){
			resetButton.textContent="Play Again?";
			messageDisplay.textContent="Correct!";
			changeColors(clickedColor);
			h1.style.backgroundColor=clickedColor;
		}
		else{
			this.style.backgroundColor="#232323";
			messageDisplay.textContent="Try Again";
		}
	});
}

function changeColors(color){
	for (var i =0;i<squares.length; i++) {
		squares[i].style.backgroundColor=color;
	}
}

function pickColor(){
	var random=Math.floor(Math.random()*colors.length)
	return colors[random];
}

function generateRandomColors(num){
	var arr=[];
	for(var i=0;i<num;i++)
	{
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}