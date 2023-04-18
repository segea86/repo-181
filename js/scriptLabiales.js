const contenedorHTML = document.getElementById("productos")
fetch("../db/labiales.json")
    .then(response => response.json())
    .then(data => {
        for(const labial of data){
            contenedorHTML.innerHTML += `
            <div class="card-producto">
                <img src=${labial.url}>
                <h2>Marca: ${labial.Marca}</h2>
                <h3>Precio: ${labial.Precio}</h3>
                <p>Color: ${labial.Color}</p>
            </div>           `
      }
    })