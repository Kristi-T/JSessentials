let paintcanvas = document.getElementById("drawingCanvas");
let context = paintcanvas.getContext("2d");
let color = "black";
let radius = 50;
// only paint if mouse is  being dragged (moved while the button is pressed)
let isPainting = false;
let widthInput = document.getElementById("inputCanvasWidth");
let widthValue = widthInput.value;
let canvasWidth;
let heightInput = document.getElementById("inputCanvasHeight");
let heightValue = heightInput.value;
let canvasHeight;
// let document.getElementById("sizeOutput").value newSize.

var lastX = 0;
var lastY = 0;

// Add event listeners for touch events
paintcanvas.addEventListener("touchstart", function (e) {
  isPainting = true;
  [lastX, lastY] = [
    e.touches[0].pageX - paintcanvas.offsetLeft,
    e.touches[0].pageY - paintcanvas.offsetTop,
  ];
});

paintcanvas.addEventListener("touchmove", function (e) {
  if (!isPainting) return;
  e.preventDefault();
  var x = e.touches[0].pageX - paintcanvas.offsetLeft;
  var y = e.touches[0].pageY - paintcanvas.offsetTop;
  drawLine(lastX, lastY, x, y);
  [lastX, lastY] = [x, y];
});

paintcanvas.addEventListener("touchend", function () {
  isDrawing = false;
});

// Function to draw a line between two points
function drawLine(x1, y1, x2, y2) {
  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.strokeStyle = "black";
  context.lineWidth = 2;
  context.stroke();
  context.closePath();
}

paintcanvas.addEventListener(
  "touchmove",
  function (e) {
    var touch = e.touches[0];
    var mouseEvent = new MouseEvent("mousemove", {
      clientX: touch.clientX,
      clientY: touch.clientY,
    });
    paintcanvas.dispatchEvent(mouseEvent);
  },
  false
);

function clearDrawing() {
  context.clearRect(0, 0, paintcanvas.width, paintcanvas.height);
}

function paintCircle(x, y) {
  // make sure to start a new circle each time
  context.beginPath();
  // draw circle using a complete (2*PI) arc around given point
  context.arc(x, y, radius, 0, Math.PI * 2, true);
  context.fillStyle = color;
  context.fill();
  context.beginPath(); // Початок нового малюнка
  context.moveTo(x, y);
}
// verify the given value is actually a number
function isNumeric(value) {
  // standard JavaScript function to determine whether a string is an illegal number (Not-a-Number)
  return !isNaN(value);
}

function setWidth(widthValue) {
  var minWidth = parseInt(document.getElementById("inputCanvasWidth").min, 10);
  var maxWidth = parseInt(document.getElementById("inputCanvasWidth").max, 10);

  if (
    isNumeric(widthValue) &&
    widthValue >= minWidth &&
    widthValue <= maxWidth
  ) {
    canvasWidth = widthValue;
    paintcanvas.width = canvasWidth;
  } else {
    alert(
      "Please enter a valid numeric value between " +
        minWidth +
        " and " +
        maxWidth +
        " for width."
    );
  }
}

function setHeight(heightValue) {
  var minHeight = parseInt(
    document.getElementById("inputCanvasHeight").min,
    10
  );
  var maxHeight = parseInt(
    document.getElementById("inputCanvasHeight").max,
    10
  );

  if (
    isNumeric(heightValue) &&
    heightValue >= minHeight &&
    heightValue <= maxHeight
  ) {
    canvasHeight = heightValue;
    paintcanvas.height = canvasHeight;
  } else {
    alert(
      "Please enter a valid numeric value between " +
        minHeight +
        " and " +
        maxHeight +
        " for height."
    );
  }
}

function startPaint() {
  if (!isPainting) {
    isPainting = true;
  }
}

function endPaint() {
  isPainting = false;
  context.beginPath(); // Завершення поточного малюнка
}

function doPaint(event) {
  if (!isPainting) return;

  var x = event.pageX - paintcanvas.offsetLeft;
  var y = event.pageY - paintcanvas.offsetTop;
  paintCircle(x, y);
}

function setColor(newColor) {
  color = newColor;
}

function resizeBrush(newSize) {
  radius = newSize;
  document.getElementById("sizeOutput").value = newSize;
}
