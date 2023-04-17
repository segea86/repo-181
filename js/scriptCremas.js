const contenedorHTML = document.getElementById("productos")
fetch("../db/cremas.json")
    .then(response => response.json())
    .then(data => {
        for(const cremas of data){
            contenedorHTML.innerHTML += `
            <div class="card-producto">
                <img src=${cremas.url}>
                <h2>Marca:${cremas.Marca}</h2>
                <p>Para:${cremas.Para}</p>
                <h3>Precio:${cremas.Precio}</h3>
            </div>           `
      }
    })