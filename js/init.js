const CATEGORIES_URL = "https://japdevdep.github.io/ecommerce-api/category/all.json";
const PUBLISH_PRODUCT_URL = "https://japdevdep.github.io/ecommerce-api/product/publish.json";
const CATEGORY_INFO_URL = "https://japdevdep.github.io/ecommerce-api/category/1234.json";
const PRODUCTS_URL = "https://japdevdep.github.io/ecommerce-api/product/all.json";
const PRODUCT_INFO_URL = "https://japdevdep.github.io/ecommerce-api/product/5678.json";
const PRODUCT_INFO_COMMENTS_URL = "https://japdevdep.github.io/ecommerce-api/product/5678-comments.json";
const CART_INFO_URL = "https://japdevdep.github.io/ecommerce-api/cart/987.json";
const CART_BUY_URL = "https://japdevdep.github.io/ecommerce-api/cart/buy.json";
const DOS_PRODUCTOS_SELECCIONADOS= "https://japdevdep.github.io/ecommerce-api/cart/654.json";

var showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

var getJSONData = function(url){
    var result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}


if(!window.location.href.endsWith('login.html') &&
 (sessionStorage.getItem('logueado') === "false" ||
  sessionStorage.getItem('logueado') === null)) {
  window.location.href='login.html'
  
} 
function imprimirUsuario (){
  document.getElementById('agrego_usuario').innerHTML= sessionStorage.getItem('usuario');
}


function logOut(){

    
  sessionStorage.setItem("logueado", false);
  sessionStorage.removeItem("usuario");
  //sessionStorage.removeItem("IsThisFirstTime_Log_From_LiveServer", false);
  
}
  let dropdownJS = `
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  </a>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item" href="my-profile.html">Mi Perfil</a>
    <a class="dropdown-item" href="cart.html">Mi Carrito</a>
    <a onclick="logOut()" class="dropdown-item" href="login.html">Cerrar sesión</a>
  </div>
  `
  let barraNavegacion = document.querySelector(".container.d-flex.flex-column.flex-md-row.justify-content-between");
  console.log(barraNavegacion);

  barraNavegacion.innerHTML += dropdownJS;

  let dropdownUser = document.getElementById("dropdownMenuLink");
  let usuarioSS = sessionStorage.getItem("usuario");
  dropdownUser.innerHTML += usuarioSS;


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
});