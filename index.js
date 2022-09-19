const password1 = document.getElementById("#password1");
const password2 = document.getElementById("#password2");
const phone = document.querySelector("#phone_number");
const phoneError = document.querySelector("#phone_error");

// Referenced https://github.com/Appletri/sign-up-form/blob/main/index.html to study error validation via JavaScript

function checkEqual() {
  // if password1.getcontent = password2.getcontent -> looks good!
  // if else -> not matching

  // if ((password1 == "") == (password2 == "")) {
  //   return;
  // } else {
  //   password1.style.display = password2.style(inputerror);
  // }
}

phone.addEventListener("input", function (event) {
  if (phone.validity.patternMismatch) {
    phoneError.textContent = "Please enter a ten digit phone number.";
  } else {
    phoneError.textContent = "";
  }
});

function keyPress() {
  password1.addEventListener("keypress", checkEqual);
  password2.addEventListener("keypress", checkEqual);
}

keyPress();
