var canvas1 = document.getElementById("canvasOrange");
var canvas2 = document.getElementById("canvasPink");
var ctx1 = canvas1.getContext("2d");
var ctx2 = canvas2.getContext("2d");

function changeCanvasColor() {
  canvas1.className = "canvas greyback";
  canvas2.className = "canvas greenback";
}

function doPink() {
  canvas2.className = "canvas bgColorFuchsia";
}

function doOrange() {
  canvas1.className = "canvas bgColorOrange";
}

function clearCanvas() {
  // canvas1.className = "greyback";
  // canvas2.className = "greenback";
  ctx1.clearRect(0, 0, canvas1.clientWidth, canvas1.height);
  canvas1.className = "canvas transparent greyback";
  // ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
  ctx2.clearRect(0, 0, canvas2.clientWidth, canvas2.height);
  canvas2.className = "canvas transparent greenback";
}

function addTextViaInput() {
  var inputElement = document.getElementById("inputCanvasText");
  var text = inputElement.value;
  var maxLength = 25;

  if (text.length > maxLength) {
    inputElement.value = text.slice(0, maxLength); // Обрізати текст до максимальної довжини
  }
  var text1 = document.getElementById("inputCanvasText").value;
  ctx1.clearRect(0, 0, canvas1.width, canvas1.height); // Очищаємо канвас перед виведенням нового тексту
  ctx1.font = "18px Arial";
  ctx1.textAlign = "center";
  ctx1.textBaseline = "middle";
  var centerW = canvas1.width / 2;
  var centerH = canvas1.height / 2;
  ctx1.fillText(text1, centerW, centerH);
  ctx1.strokeText(text1, centerW, centerH);
}
