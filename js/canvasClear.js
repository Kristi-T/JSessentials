function changeCanvasColor() {
	var canvas1 = document.getElementById("canvasOrange");
	var canvas2 = document.getElementById("canvasPink");
	canvas1.className = "greyback";
	canvas2.className = "greenback";
	
}

function doPink()
{
	var canvas2 = document.getElementById("canvasPink");
	canvas2.className = "bgColorFuchsia";
	
}

function doOrange()
{
	var canvas1 = document.getElementById("canvasOrange");
	canvas1.className = "bgColorOrange";
	
}

function clearCanvas() {
	var canvas1 = document.getElementById("canvasOrange");
	var canvas2 = document.getElementById("canvasPink");
	canvas1.className = "greyback";
	canvas2.className = "greenback";
	var ctx1 = canvas1.getContext("2d");
	var ctx2 = canvas2.getContext("2d")
	ctx1.clearRect(0, 0, canvas1.clientWidth, canvas1.height);
	canvas1.className = "transparent";
	ctx2.clearRect(0, 0, canvas2.clientWidth, canvas2.height);
	canvas2.className = "transparent";
}
