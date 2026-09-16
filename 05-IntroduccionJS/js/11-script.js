//destructurin de objetos


const producto ={
nombreProducto: 'Monitor 20 pulgadas',
precio : 300,
disponible :true


}

// forma anterior de traer los datos del objeto
/* const precioProducto = producto.precio;
const nombreProducto = producto.nombreProducto;
 */



//destructuring
/*
const {precio} = producto;   esto hace todo lo de arriba en un paso 
const {nombreProducto}= producto;
*/

const {precio ,nombreProducto}= producto;// esta es la forma mas sencilla y optima para escribir el code

console.log(precio);;
console.log(nom);;

