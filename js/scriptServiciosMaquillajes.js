const contenedorHTML = document.getElementById("productos")
fetch("../db/serviciosMaquillajes.json")
    .then(response => response.json())
    .then(data => {
        for(const servicio of data){
            contenedorHTML.innerHTML += `
            <div class="card-producto">
                <img src=${servicio.url}>
                <h2>${servicio.Servicio}</h2>
                <h3>${servicio.Costo}</h3>
                <p>Incluye:${servicio.Incluye}</p>
            </div>           `
      }
    })