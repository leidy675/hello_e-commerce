function manejarEvento(evento){
    let extraervalorEmail= document.getElementById("usuario").value;
    evento.preventDefault();
    sessionStorage.setItem('logueado',true);
    sessionStorage.setItem('usuario', extraervalorEmail);
    window.location.href = 'index.html';
    
    return true;
}
 
document.getElementById('cajitaformulario').addEventListener('submit' , manejarEvento);

document.addEventListener("DOMContentLoaded", function(e){

});


