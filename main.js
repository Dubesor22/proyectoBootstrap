const nombre = document.querySelector("#name");
const email = document.querySelector("#mail");
const password = document.querySelector("#password");
const passConfirm = document.querySelector("#password2");
const boton = document.querySelector("#btn");
let msg = document.querySelector("#msg");
let validationEmail = /(\w+?@\w+?\x2E.+)/;
let borrado = document.querySelector("#delete");
let usuarios = [];
let listarUsuario = document.querySelector("#lista");

//funcion de validar los campos
function validar() {
  let isValid = false;
  if (
    nombre.value === "" ||
    email.value === "" ||
    password.value === "" ||
    passConfirm.value === ""
  ) {
    printMsg("Please enter all fields");
  } else if (validationEmail.test(email.value) !== true) {
    printMsg("Please enter a correct email");
  } else if (password.value !== passConfirm.value) {
    printMsg("Las contraseñas tienen que coincidir");
  } else {
    printMsg("Usuario creado correctamente");
    isValid = true;
  }
  return isValid;
}

function printMsg(mensaje) {
  msg.innerHTML = mensaje;
  setTimeout(function () {
    msg.innerHTML = "";
  }, 5000);
}

//funcion para subir al LocalStorage
function enviarDatos(userData) {
  usuarios.push(userData);
  localStorage.setItem("info", JSON.stringify(usuarios));
}

//funcion para comparar contraseñas
function crearUsuario(e) {
  e.preventDefault();
  if (!validar()) {
    return;
  }
  let userData = {
    nombre: nombre.value,
    correo: email.value,
    contraseña: password.value,
  };
  enviarDatos(userData);
  addNewUser(userData);
  resetForm();
}
//Funcion resetear form
function resetForm() {
  nombre.value = "";
  email.value = "";
  password.value = "";
  passConfirm.value = "";
}

boton.addEventListener("click", crearUsuario);

//Funcion de borrar toda la memoria y pantalla (reset)
function borrar() {
  localStorage.clear();
  console.clear();
  listarUsuario.remove();
}

borrado.addEventListener("click", borrar);

//imprime usuarios en el html
function addNewUser(userData) {
  listarUsuario.innerHTML += `<li class="list-group-item"> ${userData.nombre}, ${userData.correo} </li>`;
}
