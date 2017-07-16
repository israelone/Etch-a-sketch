
 var input=64;





$(document).ready(function(){
	grid();
	color();
	reset();
	gridUpdate();
	/*getRandomColor();*/
});
 
function grid(){
	var gridSize=input*input;
	var pixelSize=500/input;

for(var i=0;i<gridSize;i++){

	var size=$("<div class=\"pixel\"></div>");
$("#mainScreen").append(size);
console.log(i);
}

 	$(".pixel").css("height", pixelSize);
 	$(".pixel").css("width", pixelSize);


};

function color(){
	$(".pixel").hover(function(){
		$(this).css("background", "black")

	}
)};

function reset(){
	$("#reset").click(function(){
		$(".pixel").css("background", "")
	});
};

function gridUpdate(){
	$("#updateGrid").click(function(){
		input=$("#input").val();
		$("#mainScreen").empty();
		console.log(input);
		grid();
		color();
		reset();
	});
};


/*	function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var randomColor = '#';
        for (var i = 0; i < 6; i++ ) {
            randomColor += letters[Math.round(Math.random() * 15)];
        }
      $(".pixel").click(function(){  
        $(".pixel").css("background-color", randomColor);

    });
    }
} */
console.log($("#input"));
grid();
color();
reset();