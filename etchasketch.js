
var input=64;
var randomColor=getRandomColor();
var random=false;

$(document).ready(function(){
	grid();
	color();
	reset();
	gridUpdate();
	getRandomColor();
	randomButton();
});
 
function grid(){
	var gridSize=input*input;
	var pixelSize=500/input;

	for(var i=0;i<gridSize;i++){

		var size=$("<div class=\"pixel color\"></div>");
		$("#mainScreen").append(size);

}
		$(".pixel").css("height", pixelSize);
 		$(".pixel").css("width", pixelSize);
};

function color(){
	$(".pixel").hover(function(){
		$(this).css("background", "black")

	})    	
}
   
function reset(){
	random=false;
	$("#reset").click(function(){
		$(".pixel").css("background", "")
		color()
	});
	
};

function gridUpdate(){
	$("#updateGrid").click(function(){
		input=$("#input").val();
		$("#mainScreen").empty();
		
		grid();
		color();
		reset();
	});
};

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    randomColor = '#';
	
	for (var i = 0; i < 6; i++ ) {
	randomColor += letters[Math.round(Math.random() * 15)];
}
        
  return randomColor;
};
    
function randomButton(){

	$("#random").click(function (){
	
	if(random===false){
		random=true
		$(".pixel").hover(function(){
      	$(this).css("background", getRandomColor())
  })
  }
 	else{
  	random=false
  	color()
  }
}
)};


grid();
color();
reset();
getRandomColor();
randomButton();
