//Debemos llamar a nuestro elemento formulario desde html y traerlo a JS
const formularioUsuarios = document.querySelector(".formUsuarios")
//Lo llamé por clase en vez de por id, por eso usé el querySelector. De tener varias clases llamadas iguales, siempre va a llamar a la primera.
//Personalmente al profesor prefiere llamar por id, pero hay gente que usa seleccionar por clases.
const usuarios = []
const usuariosContainerHTML = document.querySelector("#usuariosContainer")
//Es más nuevo el querySelector y por eso está más de moda. Pero al profesor no le gustó mucho.
formularioUsuarios.addEventListener("submit", (event) => {
    event.preventDefault() //Para evitar el comportamiento por defecto del submit, que se recarga solo
    console.log(formularioUsuarios.provincia.value)
    usuarios.push(formularioUsuarios.provincia.value)
})