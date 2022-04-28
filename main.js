const nombre = document.querySelector("#name");
const email = document.querySelector("#mail");
const password = document.querySelector("#password");
const passConfirm = document.querySelector("#password2");
const boton = document.querySelector("#btn");
let msg = document.querySelector("#msg");
let validationEmail = /(\w+?@\w+?\x2E.+)/;
let borrado = document.querySelector("#delete");
let usuarios = [];

//funcion de validar los campos
function validar() {
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
    msg.innerHTML = "Usuario creado correctamente";
  }

  setTimeout(function () {
    msg.innerHTML = "";
  }, 5000);
}

//funcion para subir al LocalStorage
function enviarDatos() {
  if (validationEmail.test(email.value) == true) {
    let info = {
      nombre: nombre.value,
      correo: email.value,
      contraseña: password.value,
    };
    usuarios.push(info);
    localStorage.setItem("Info", JSON.stringify(usuarios));
  }
}

//funcion para comparar contraseñas
function compararContraseña(e) {
  e.preventDefault();
  if (password.value === passConfirm.value) {
    validar();
    enviarDatos();
    nombre.value = "";
    email.value = "";
    password.value = "";
    passConfirm.value = "";
  } else {
    password.value = "";
    passConfirm.value = "";
    msg.innerHTML = "Las contraseñas no son iguales.";
    setTimeout(function () {
      msg.innerHTML = "";
    }, 5000);
  }
}

boton.addEventListener("click", compararContraseña);

//Funcion de borrar toda la memoria y pantalla (reset)
function borrar() {
  localStorage.clear();
  console.clear();
  listarUsuario.remove();
}

borrado.addEventListener("click", borrar);
