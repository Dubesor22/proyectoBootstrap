const nombre = document.querySelector("#name");
const email = document.querySelector("#mail");
const password = document.querySelector("#password");
const passConfirm = document.querySelector("#password2");
const boton = document.querySelector("#btn");
let msg = document.querySelector("#msg");
let validationEmail = /(\w+?@\w+?\x2E.+)/;
let usuarios = [];

//funcion de validar los campos
function validar(e) {
  e.preventDefault();

  if (
    nombre.value === "" ||
    email.value === "" ||
    password.value === "" ||
    passConfirm.value === ""
  ) {
    gi;
    msg.innerHTML = "Please enter all fields";
  } else if (validationEmail.test(email.value) !== true) {
    msg.innerHTML = "Please enter a correct email";
  } else {
    msg.innerHTML = "Success";
  }

  setTimeout(function () {
    msg.innerHTML = "";
  }, 3000);
}

function enviaDatos() {}

boton.addEventListener("click", validar);
