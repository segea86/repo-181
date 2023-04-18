const contenedorHTML = document.getElementById("productos")
fetch("../db/esmaltes.json")
    .then(response => response.json())
    .then(data => {
        for(const esmalte of data){
            contenedorHTML.innerHTML += `
            <div class="card-producto">
                <img src=${esmalte.url}>
                <h2>Marca: ${esmalte.Marca}</h2>
                <h3>Precio: ${esmalte.Precio}</h3>
                <p>Color: ${esmalte.Color}</p>
            </div>           `
      }
    })