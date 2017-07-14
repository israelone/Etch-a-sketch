
// var input=prompt("Choose grid size from 1 to 64");-->
var gridSize=90*44;

console.log(gridSize);



$(document).ready(function(){
	grid();
	color();
	reset();
	getElementsByTagName();
});
 
function grid(){
for(var i=0;i<gridSize;i++){

	var size=$("<div class=\"pixel\"></div>");
$("#mainScreen").append(size);
console.log(i);
}
};

function color(){
	$(".pixel").hover(function(){
		$(this).css("background-color", "black")

	}
)};

function reset(){
	$("#reset").click(function(){
		$("#pixel").css("background", "")
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

grid();
color();
reset();