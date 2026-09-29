



//****************************    METODOS DE PROPIEDAD   ***************************

const reproductor = {
    reproducir: function (id) {
        console.log(`Reproduciendo Cancio con el ID : ${id}`)
    },

    pausar: function () {

        console.log(`Pausando la cancion...`);

    },


    CrearPlaylist: function (nombre) {

        console.log(`Creando la playlist : ${nombre}`);

    },


    ReproducirPlaylist: function (nombre) {

        console.log(`Reproduciendo la playlist : ${nombre}`);

    }

    /* 
    Todas estas funciones estan por dentro
    
    */

}

/* Tambien se pueden colocar funciones por fuera del objeto */



/* Funcion con parametro */
reproductor.borrarcancion = function (id) {

    console.log(`Eliminado cancion con el id: ${id}`);
}



reproductor.reproducir(2840);
reproductor.pausar();
reproductor.CrearPlaylist(`ira dei`);
reproductor.ReproducirPlaylist(`ira dei`);

reproductor.borrarcancion(1010);