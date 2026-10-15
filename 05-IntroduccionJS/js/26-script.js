//****************************   Palabra reservada this    ***************************


/* Esto es un objeto */
const reservacion = {

    nombre: 'Juanjo',
    apellido: 'Roman',
    total: 1010,
    pagado: false,



/* esto es na funcion dentro de un objeto */
    informacion:function(){
    
        console.log(`El Cliente ${this.nombre} reservo y su cantidad apagar es de ${this.total}`);
    
    
    
    }




}


reservacion.informacion()


/* Hace referencia a vparametros de un objeto , y la palabra this esta reservada para no tener que modificar las variables dentro del objeeto y sus funciones 


this permite acceder a las propiedades del objeto desde uno de sus métodos sin tener que escribir el nombre del objeto directamente.


*/