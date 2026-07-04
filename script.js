function showWelcomeMessage() {

  var msg = document.getElementById("welcomeMsg");

  msg.innerHTML = "Thank you for visiting! Sweet Crumb Bakery has been serving fresh bread and pastries since 2015.";
}

var loafCount = 1;

function changeCount(amount) {
  loafCount = loafCount + amount;
  if (loafCount < 1) {
    loafCount = 1;
  }
  var display = document.getElementById("counterDisplay");

  display.innerHTML = loafCount;
}

function addToCart(productName) {
  var cartMsg = document.getElementById("cartMsg");

  cartMsg.innerHTML = productName + " has been added to your cart!";
}

function submitForm() {

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var result = document.getElementById("formResult");

  if (name == "" || email == "" || message == "") {

    result.innerHTML = "Please fill in all fields before sending.";
    // check if the fields are empty and display an error message if they are, learn from internet
  } else {

    result.innerHTML = "Thank you " + name + ", your message has been received.";

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  }
}