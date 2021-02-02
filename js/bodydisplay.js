function bodydisplay(){
    
    var loading = document.getElementById ('loading');
    
    var body = document.getElementById ('container');


    // si tienen distintas secciones usar asi
    var header = document.getElementById ('container-header');
    var packaging = document.getElementById ('container-packaging');
    var footer = document.getElementById ('container-footer');
    var contacto = document.getElementById('contacto');
    var carrusel = document.getElementById('amazingcarousel-container-2');
    //es importante que si son distintas secciones tengan distintos id. no se pueden repetir.

    body.style.display = "block";
    loading.style.display= "none";
    header.style.display = "block";
    footer.style.display = "block";
    // si tienen secciones que estan en algunas pestañas si y otras no.. usarlas asi.
    //sino genera un error el script y se corta su ejecucion
    if(contacto !=null){
        contacto.style.display = "block";
    }
    if(packaging !=null){
        packaging.style.display = "block";
    }
    if(carrusel !=null){
        carrusel.style.display = "block";
    }

}