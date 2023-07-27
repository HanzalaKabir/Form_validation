let formData = document.querySelector(".form");
let submitButton = document.querySelector(".button");
let errorMessages = document.querySelectorAll(".error-message");
let emptyFields = document.querySelectorAll(".empty-field");
let showPwdButton = document.querySelector(".btn");
let firstName, lastName, email, pwd;
let fnTarget, lnTarget, eTarget, pwdTarget;
let fnflag, lnflag, eflag, pwdflag;
let key;
let nameRegex = /^[a-z]+$/i;
let emailRegex = /^\w+([-]?\w+)@\w+([--]?\w+)(\.\w{2,3})+$/;
let passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
for (let errorMessage of errorMessages) {
  errorMessage.classList.add("d-none");
}
for (let emptyField of emptyFields) {
  emptyField.classList.add("d-none");
}

formData.addEventListener("keyup", (event) => {
  event.preventDefault();
  key = event.target.dataset.key;
  switch (key) {
    case "firstName":
      firstName = event.target.value;
      fnTarget = event.target;
      break;
    case "lastName":
      lastName = event.target.value;
      lnTarget = event.target;
      break;
    case "email":
      email = event.target.value;
      eTarget = event.target;
      break;
    case "password":
      pwd = event.target.value;
      pwdTarget = event.target;
      break;
    default:
      pwd = lastName = firstName = email = "";
  }
});
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (firstName) {
    emptyFields[0].classList.add("d-none");
    if (!nameRegex.test(firstName)) {
      fnflag = false;
      fnTarget.classList.add("error");
      errorMessages[0].classList.remove("d-none");
    } else {
      fnflag = true;
      fnTarget.classList.remove("error");
      errorMessages[0].classList.add("d-none");
    }
  } else {
    emptyFields[0].classList.remove("d-none");
  }
  if (lastName) {
    emptyFields[1].classList.add("d-none");
    if (!nameRegex.test(lastName)) {
      lnflag = false;
      lnTarget.classList.add("error");
      errorMessages[1].classList.remove("d-none");
    } else {
      lnflag = true;
      lnTarget.classList.remove("error");
      errorMessages[1].classList.add("d-none");
    }
  } else {
    emptyFields[1].classList.remove("d-none");
  }
  if (email) {
    emptyFields[2].classList.add("d-none");
    if (!emailRegex.test(email)) {
      eflag = false;
      eTarget.classList.add("error");
      errorMessages[2].classList.remove("d-none");
    } else {
      eflag = true;
      eTarget.classList.remove("error");
      errorMessages[2].classList.add("d-none");
    }
  } else {
    emptyFields[2].classList.remove("d-none");
  }
  if (pwd) {
    emptyFields[3].classList.add("d-none");
    if (!passwordRegex.test(pwd)) {
      pwdflag = false;
      pwdTarget.classList.add("error");
      errorMessages[3].classList.remove("d-none");
    } else {
      pwdflag = true;
      pwdTarget.classList.remove("error");
      errorMessages[3].classList.add("d-none");
    }
  } else {
    emptyFields[3].classList.remove("d-none");
  }
  if (fnflag && lnflag && eflag && pwdflag) {
    fnTarget.value = lnTarget.value = eTarget.value = pwdTarget.value = "";
    window.location.href = "success.html";
  }
});

showPwdButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (pwd) {
    if (pwdTarget.getAttribute("type") === "text") {
      pwdTarget.setAttribute("type", "password");
    } else {
      pwdTarget.setAttribute("type", "text");
    }
  }
});

function greaterThanHalf(number) {
  for (let i = 0; i < number; i++) {
    if (i > number / 2) {
      console.log(i);
    }
  }
}
