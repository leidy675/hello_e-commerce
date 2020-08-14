//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

var productosArray = [];

function showProductosList(array){

    let htmlContentToAppend = "";
    for(let i = 0; i < array.length; i++){
        let producto = array[i];

        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + producto.imgSrc + `" alt="` + producto.desc + `" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">`+ producto.name +`</h4>
                        <small class="text-muted">` + producto.soldCount + ` artículos</small>
                    </div>
                    <div>`+ producto.cost + ` `+ producto.currency+`</div>
                    <div>`+ producto.description +`</div>
                    
                </div>
            </div>
        </div>
        `

        document.getElementById("pro").innerHTML = htmlContentToAppend;
    }
}

document.addEventListener("DOMContentLoaded", function(e){
    showSpinner();
    getJSONData(PRODUCTS_URL).then(function(resultObj){

        if (resultObj.status === "ok")
        {
            productosArray= resultObj.data;
            //Muestro los productos ordenados
            showProductosList(productosArray);
        }
        hideSpinner();
    });
});
