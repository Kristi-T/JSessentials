// Confirmations and alerts Section

function confirmColorChange() {
  var dd1 = document.getElementById("confirmButton");
  var userConfirmed = confirm(
    "Do you want to change the button color to yellow?"
  );
  if (userConfirmed) {
    dd1.style.backgroundColor = "yellow";
  }
}

function handleConfirmation() {
  var choice = confirm("Do you want to proceed?");

  var message;
  if (choice) {
    message = "You pressed OK!";
  } else {
    message = "Are you sure you want to cancel?";
  }

  alert(message);
}

function alertFunction() {
  alert("This is alert function");
}
