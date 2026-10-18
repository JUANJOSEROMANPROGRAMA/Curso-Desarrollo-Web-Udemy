//****************************   Notificacion API    ***************************



/* Siempre que se quiera agarrar algo del HTML se utiliza la plabra reservada document.querySelector */

const boton = document.querySelector('#boton');

/* fucion que registra un evento al id de boton */


boton.addEventListener('click', function () {

    /* se envia una notificacion pidiendo permiso de notificacion */
    Notification.requestPermission()
    
    
    /* con el promise de then se imprime el resultado de la peticion en la notificacion  granted para quedar aceptado*/
    .then(resultado => console.log(`el resultado es ${resultado}`))


}); 


if(Notification.permission == 'granted'){



    /* lo que se deses que muestre la notificacion */
    new Notification ( ' Titulo de la  Notificacion',{
    
    
    icon:'img/imagen.jpg',
    body:'mensaje body de la notificacion'
    
    })
}



