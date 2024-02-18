function uploadImage() {
  var canvas = document.getElementById("canvasUpload");
  var ctx = canvas.getContext("2d");
  var fileInput = document.getElementById("fileInput");
  var image = new Image();

  image.onload = function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  };

  var file = fileInput.files[0];
  if (file) {
    var reader = new FileReader();
    reader.onload = function (e) {
      image.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}
