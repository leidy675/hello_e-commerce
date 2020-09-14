let comentsArray = []; //almacenar comentarios
let carros= {};
function createNode(element) {

    return document.createElement(element);
}
   
function append(parent, el){
   
   return parent.appendChild(el);
}

function comentUsuario(event){
    event.preventDefault();
    let valorar= document.getElementById("calificacion").value;
    let opinion= document.getElementById("opinionUsuario").value;
    let contenedor= document.getElementById("comentarioNuevo");
    let nombreUsuario= sessionStorage.getItem('email');
    let today = new Date();
    let fecha = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let hora = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let fechaCompleta = fecha+` `+hora;
    
    html = `
    <hr>
    
    <p> ` + nombreUsuario + ` </p>
    <p> ` + opinion + ` </p>
    <div class="score_valoracion">
		<span>Valoración: `+ valorar +`</span>
		<span class="fa fa-star"></span>
		<span class="fa fa-star"></span>
		<span class="fa fa-star"></span>
		<span class="fa fa-star"></span>
		<span class="fa fa-star"></span>   
	</div>
    <p> ` + fechaCompleta+ ` </p>
      
    `   
    let elemento= createNode('div');
    elemento.innerHTML+= html;
    let star=elemento.getElementsByClassName("fa-star");
    for(let i=0; i<valorar; i++){
        star[i].classList.add("checked");

    }
    append(contenedor, elemento);
   
}
function muestroImagenesG(array){
    let htmlContentToAppend = "";

    for(let i = 0; i< array.length; i++){
        let imag= array[i];
        htmlContentToAppend += `
            <div class="col-lg-3 col-md-4 col-6">
                <div class="d-block mb-4 h-100">
                    <img class="img-fluid img-thumbnail" src="` + imag + `" alt="">
                </div>
            </div>
        ` 
    }document.getElementById("produ_inf").innerHTML = htmlContentToAppend;
}

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if(resultObj.status === "ok"){
            let car = resultObj.data;

            let nombrecar = document.getElementById("nombre-carro");
            let categoriaCar = document.getElementById("categoria"); 
            let costCar= document.getElementById("costo");
            let descripcionCar= document.getElementById("descripcion");
            

            nombrecar.innerHTML= car.name;
            categoriaCar.innerHTML= car.category;
            costCar.innerHTML= car.cost +" "+ car.currency;
            descripcionCar.innerHTML= car.description;




            //Visualización de las imagenes
            muestroImagenesG(car.images);
            getJSONData(PRODUCTS_URL).then(function(resultObj){
                if(resultObj.status = "ok"){
                    let autos=resultObj.data;
                    let htmlContentToAppend="";
                    for(let x=0; x< car.relatedProducts.length; x++){
                        let autosRelacionados= autos[car.relatedProducts[x]];
                        htmlContentToAppend += `
                            <div class="col-lg-3 col-md-4 col-6 text-center">
                                <div class="d-block mb-4 h-100">
                                    <img class="img-fluid img-thumbnail" src="` + autosRelacionados.imgSrc+ `" alt="">
                                </div>
                            </div>
                        ` 
                    }document.getElementById("relate-product").innerHTML+= htmlContentToAppend;
                }
            });  
        }
          
            

    });
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        if(resultObj.status = "ok"){
            carros = resultObj.data;
            let html = "";
            let contenedor = document.getElementById("comentarios");
            
            for(i=0; i<carros.length;i++){
                let comentario = carros[i];
                let elemento= createNode('div');
                
                html = `
                    <hr>
                    
                    <p> ` + comentario.user + ` </p>
                    <p> ` + comentario.description + ` </p>
                    <div>
                        <span>Valoración: `+ comentario.score +`</span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>   
	                </div>
	                <p> ` + comentario.dateTime + ` </p>
                `   
                    
                 elemento.innerHTML+= html;
                let star=elemento.getElementsByClassName("fa-star");
                for(let z=0; z<comentario.score; z++){
                    star[z].classList.add("checked");

                }
                    
                append(contenedor, elemento);
            } 
            
            
           console.log(carros);
        }
    });   

});
