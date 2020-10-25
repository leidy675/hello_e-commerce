//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.


var array = {};
var usdapesosuy=40;
var subTotal=0;

function mostrarInfodeCarritoPre(){
    let operacion= 0 ;
    let htmlContentToAppend = "";
    document.getElementById("car-info-compra").innerHTML = "";
        for(let i=0; i < array.length; i++){
            
            if(array[i].currency === "USD"){
                
                operacion = array[i].count * (array[i].unitCost*usdapesosuy);
                
            }
            else {
                operacion = array[i].count * array[i].unitCost;
            }

            subTotal=operacion+subTotal;

                htmlContentToAppend += `
                    <tr>
                        <td><img class=" img-thumbnail"  width="150" higth="100" src="` + array[i].src + `" alt=""></td>
                        <td>`+array[i].name+`</td>
                        <td>`+ array[i].unitCost + ` `+ array[i].currency+`</td>
                        <td><input id="producto_`+ i +`" type="number" min="1" max=50 placeholder="Modificar cantidad" 
                        class="form-control w-30 input" value="` + array[i].count +`" onChange="modificarCantidadProductoCarrito(`+ i +`)"></td>
                        <td>`+operacion+` `+`UYU </td>
                        <td><input type="button" value="Eliminar"></td>
                    </tr> 
                            
                `
            
    }
    document.getElementById("car-info-compra").innerHTML+= htmlContentToAppend;
    document.getElementById("subtotalfinal").innerHTML= subTotal;
    facturaFinal ();
}

function modificarCantidadProductoCarrito(pos){

    for(let i=0; i < array.length; i++){

        if(pos === i){
            array[i].count = parseInt(document.getElementById("producto_"+i).value);
            mostrarInfodeCarritoPre();
        }
    }

}
 
function facturaFinal () {
    let valorenvi=document.getElementById("sclenvio").value;
    
    
    let envio = document.getElementById("porcentajedeenvio")
  
    
        switch(valorenvi){
            case "pre":
                envio.innerHTML= subTotal*0.15;
            break;
            case "exp":
                envio.innerHTML = subTotal* 0.07;

            break
            case "st":
            
                envio.innerHTML = subTotal *0.05;
            break;     
            
        }  
        document.getElementById("totalCostText").innerHTML = subTotal+ parseInt(envio.innerHTML);      
    

}

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(DOS_PRODUCTOS_SELECCIONADOS).then(function(resultadoObj){
        if(resultadoObj.status = "ok"){
            let=autosParaComprar= resultadoObj.data;
            array = autosParaComprar.articles;
            mostrarInfodeCarritoPre();
        }

    });
})