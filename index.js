const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");

function checkEqual() {
    // if password1.getcontent = password2.getcontent -> looks good!
    // if else -> not matching
}

function keyPress() {
  password1.addEventListener("keypress", checkEqual);
  password2.addEventListener("keypress", checkEqual);
}

keyPress();