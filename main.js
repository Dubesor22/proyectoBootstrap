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
    msg.innerHTML = "Please enter all fields";
  } else if (validationEmail.test(email.value) !== true) {
    msg.innerHTML = "Please enter a correct email";
  } else {
    msg.innerHTML = "Success";
  }

  setTimeout(function () {
    msg.innerHTML = "";
  }, 5000);
}

//funcion para subir al LocalStorage
function enviarDatos()
  if(validationEmail.test(email.value) == true){
    let info = {
      nombre: nombre.value,
      correo: email.value,
      contraseña: password.value
  }
  usuarios.push(info);
  localStorage.setItem('Info', JSON.stringify(usuarios));
  document.getElementById('nombre').value = '';
  document.getElementById('email').value = '';
  document.getElementById('password').value = '';
} 

//funcion para comparar contraseñas

boton.addEventListener("click", validar);
boton.addEventListener("click", enviarDatos);



