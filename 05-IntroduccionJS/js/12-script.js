//

"use strict"//ejecutar el codigo de javascript de forma estricta siguiendo las maneras adecuadas



const producto ={
nombreProducto: 'Monitor 20 pulgadas',
precio : 300,
disponible :true


}

Object.freeze(producto); // congela el objet para que no se pueda modificar mas (agregar ,eliminar,modificar)
Object.seal(producto);// no permite eliminar, agregar pero si permite modificar

console.log(Object.isFrozen(producto));//para verificar si un objeto esra congelado o no---devuelve un boleano
console.log(Object.seal(producto));

/* 
producto.imagen = 'imagen.jpg'; */

console.log(producto);


/* DIFERENCIAS ENTRE SEAL Y FREEZE

freeze congela para que al objeto no se le pueda agregar , eliminar ni cambiar

seal si prmite modificar el objeto ya existente



*/