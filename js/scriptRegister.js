const formularioUsuarios = document.querySelector(".formUsuarios");
const usuariosContainerHTML = document.querySelector("#usuariosContainer");

const usuarios = [];

formularioUsuarios.addEventListener("submit", (event) => {
  event.preventDefault();
  if (camposCompletos()) {
    usuarios.push({
      nombre: formularioUsuarios.nombre.value,
      email: formularioUsuarios.email.value,
      contrasena: formularioUsuarios.contrasena.value,
      provincia: formularioUsuarios.provincia.value,
    });
    alert("Bienvenido a la experiencia Cosme Fulanito");
  }else {
    alert("Complete todos los campos por favor. Recuerde usar una cuenta de gmail o hotmail");
  }
});


function camposCompletos() {
  nombre = formularioUsuarios.nombre.value;
  email = formularioUsuarios.email.value;
  contrasena = formularioUsuarios.contrasena.value;
  if (!nombre || (!esEmail()) || !contrasena) {
    return false;
  } else {
    return true;
  }
}

function esEmail(){
  if (((email.includes("@gmail"))||(email.includes("@hotmail")))&&(email)){
    return true;}
    else{
    return false;}}