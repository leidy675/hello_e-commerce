//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
//let mensaje= document.createElement("p");
//let nombredeUsuario= document.getElementById("usuario");

//let texto= document.createTextNode("Bienvenido" + "nombredeUsuario");
//mensaje.appendChild(nombredeUsuario);
//document.getElementById("container").appendChild(mensaje)

function manejarEvento(evento){
    let extraervalorEmail= document.getElementById("usuario").value;
    evento.preventDefault();
    sessionStorage.setItem('logueado','true');
    sessionStorage.setItem('email', extraervalorEmail);
    window.location.href = 'index.html';
    
    return true;
}
 
document.getElementById('cajitaformulario').addEventListener('submit' , manejarEvento);

document.addEventListener("DOMContentLoaded", function(e){

});


