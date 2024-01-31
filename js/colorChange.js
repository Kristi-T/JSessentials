// Change color and text
var divElement1 = document.getElementById("divFuchsia");
var divElement2 = document.getElementById("divOrange");
var changeColorButton = document.getElementById("changeColorButton");
var changeTextButton = document.getElementById("changeTextButton");

function changeColor() {
  if (divElement1.className == "bgColorFuchsia") {
    divElement1.className = "bgColorBlue";
  } else {
    divElement1.className = "bgColorFuchsia";
  }

  if (divElement2.className == "bgColorOrange") {
    divElement2.className = "bgColorYellow";
  } else {
    divElement2.className = "bgColorOrange";
  }

  if (divElement1.className == "bgColorFuchsia") {
    changeColorButton.value = "Change color";
  } else {
    changeColorButton.value = "Reset color";
  }
}

function changeText() {
  // divElement1.querySelector("p").innerHTML = "Glory Ukraine!!!";
  // divElement2.querySelector("p").innerHTML = "To the heroes Glory!!!";

  if (divElement1.querySelector("p").innerHTML === "Glory Ukraine!!!") {
    changeTextButton.value = "Reset text";
    divElement1.querySelector("p").innerHTML = "Hello World!";
  } else {
    divElement1.querySelector("p").innerHTML = "Glory Ukraine!!!";
    changeTextButton.value = "Change text";
  }

  if (divElement2.querySelector("p").innerHTML === "To the heroes Glory!!!") {
    divElement2.querySelector("p").innerHTML = "Nice to meet you!";
  } else {
    divElement2.querySelector("p").innerHTML = "To the heroes Glory!!!";
  }
}
