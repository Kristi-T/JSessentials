// Canvas Section
function doLime() {
  var dd1 = document.getElementById("canvasFirst");
  dd1.style.backgroundColor = "lime";
}

function doYellow() {
  var dd1 = document.getElementById("canvasFirst");
  dd1.style.backgroundColor = "yellow";
  var ctx = dd1.getContext("2d");

  // ctx.fillStyle = "green";
  // ctx.fillRect(10, 10, 40, 40);
  // ctx.fillRect(60, 10, 30, 40);

  // ctx.font = "30px Arial";
  // ctx.fillText("Hello World", 70, 80);
}

function addGreenRect() {
  var dd1 = document.getElementById("canvasFirst");
  dd1.style.backgroundColor = "yellow";
  var ctx = dd1.getContext("2d");

  ctx.fillStyle = "green";
  ctx.fillRect(10, 10, 40, 40);
  ctx.fillRect(60, 10, 30, 40);
  // ctx.font = "30px Arial";
  // ctx.fillText("Hello World", 70, 80);
}

function addText() {
  var dd1 = document.getElementById("canvasFirst");
  // dd1.style.backgroundColor = "yellow";
  var ctx = dd1.getContext("2d");

  ctx.fillStyle = "green";
  // ctx.fillRect(10, 10, 40, 40);
  // ctx.fillRect(60, 10, 30, 40);

  ctx.font = "30px Arial";
  ctx.fillText("Hello World", 70, 80);
}

function doColor() {
  var dd1 = document.getElementById("canvasFirst");
  var colorinput = document.getElementById("color");
  var color = colorinput.value;
  dd1.style.backgroundColor = color;
}

function doSquare() {
  var dd1 = document.getElementById("canvasFirst");
  var range = document.getElementById("slider");
  var size = range.value;
  var ctx = dd1.getContext("2d");
  ctx.clearRect(0, 0, dd1.width, dd1.height);
  ctx.fillStyle = "blue";
  ctx.fillRect(60, 10, size, size);
}
