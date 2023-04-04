const formularioUsuarios = document.querySelector(".formUsuarios")
const usuariosContainerHTML = document.querySelector("#usuariosContainer")
/* document.getElementsByClassName("inputContainer") / document.querySelectorAll(".inputContainer") */

const usuarios = []


formularioUsuarios.addEventListener("submit", (event) =>{
    event.preventDefault()
    console.log(formularioUsuarios.provincia.value)
    usuarios.push({
        nombre: formularioUsuarios.nombre.value,
        email: formularioUsuarios.email.value,
        contrasena: formularioUsuarios.contrasena.value,
        provincia:formularioUsuarios.provincia.value
    })
})