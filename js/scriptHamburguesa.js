const barra2 = document.querySelector("#barra2");
const abrirMenu = document.querySelector("#abrirMenu");
const cerrarMenu = document.querySelector("#cerrarMenu");

abrirMenu.addEventListener("click", () => {
    barra2.classList.add("visible");
    
})

cerrarMenu.addEventListener("click", () => {
    barra2.classList.remove("visible");
    
})