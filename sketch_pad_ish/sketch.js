$(document).ready(function() {
	drawGrid(16);
	$("#brush").click(function() {
		$("#brush").css("border", "2px dashed black");
		$("#eraser").css("border", "0");
		startPaint();
	});
$("#clear").click(function() {
	var size = prompt("Enter squares per side for the new grid? \nEx: Entering 10 will create a 10X10 square grid");
	drawNewGrid(size);
});
$("#eraser").click(function() {
	$("#eraser").css("border", "2px dashed black");
	$("#brush").css("border", "0");
	$(".box").mouseenter(function(){
		$(this).css("background-color", "white");
});
});
});

function drawNewGrid(number) {
$("#canvas").empty();
drawGrid(number);
};

function drawGrid(gridSize){
	for (var i = 0; i < gridSize * gridSize; i++) {
		$("#canvas").append('<div class="box outline"></div>')
	}
	$(".box").css({
		'width': $('#canvas').width() / gridSize,
		'height': $('#canvas').height() / gridSize,
		'border': '1px solid black',
	});
};
function startPaint() {
	$(".box").mouseenter(function(){
		$(this).css("background-color", "black");
	});
}