const nombre = document.querySelector("#name");
const email = document.querySelector("#mail");
const password = document.querySelector("#password");
const passConfirm = document.querySelector("#password2");
const boton = document.querySelector("#btn");
let msg = document.querySelector("#msg");
let msg2 = document.querySelector("#msg2");
let validationEmail = /(\w+?@\w+?\x2E.+)/;
let borrado = document.querySelector("#delete");
let usuarios = [];
let listarUsuario = document.querySelector("#lista");
let mensajeAlerta = document.querySelector("#mensajeAlerta");
let mensajeAlertaVerde = document.querySelector("#mensajeAlertaVerde");

//funcion de validar los campos
function validar() {
  let isValid = false;
  if (
    nombre.value === "" ||
    email.value === "" ||
    password.value === "" ||
    passConfirm.value === ""
  ) {
    mensajeAlerta.style.opacity = 1;
    printMsg("Por favor, rellena todos los campos.");
  } else if (validationEmail.test(email.value) !== true) {
    printMsg("Por favor, introduce un email válido.");
    email.value = "";
    mensajeAlerta.style.opacity = 1;
  } else if (password.value !== passConfirm.value) {
    printMsg("Las contraseñas tienen que coincidir");
    mensajeAlerta.style.opacity = 1;
    password.value = "";
    passConfirm.value = "";
  } else {
    msg.style.color = "#fff";
    printMsg("Usuario creado correctamente!");
    mensajeAlertaVerde.style.opacity = 1;
    isValid = true;
  }
  return isValid;
}

// imprimir mensajes
function printMsg(mensaje) {
  msg.innerHTML = mensaje;
  msg2.innerHTML = mensaje;

  setTimeout(function () {
    mensajeAlertaVerde.style.opacity = 0;
    mensajeAlerta.style.opacity = 0;
    msg.innerHTML = "";
  }, 5000);
}

//funcion para subir al LocalStorage
function enviarDatos(userData) {
  usuarios.push(userData);
  localStorage.setItem("info", JSON.stringify(usuarios));
}

// funcion para crear el usuario si validar es true
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
// function addNewUser(userData) {
//   listarUsuario.innerHTML += `<li class="list-group-item" id="cards"> <b>Nombre de usuario:</b> ${userData.nombre}<br> <b>Correo:</b> ${userData.correo} </li><br>`;
// }

function addNewUser(userData) {
  listarUsuario.innerHTML += `<div class="card" style="width: 18rem;">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo7UdctCTSiIBgEK0Z-0RwLYaJm5uKPKDsOQ&usqp=CAU" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text"><b>Nombre de usuario:</b> ${userData.nombre}<br> <b>Correo:</b> ${userData.correo} </p>
  </div>
</div></br>`;
}
