const carrito = [

    { nombre: 'Monitor de 25 pulgadas', precio: 200 },
    { nombre: 'TV TCL', precio: 4000 },
    { nombre: 'Guante de softball', precio: 500 },
    { nombre: 'camiseta yankees', precio: 530 },
    { nombre: 'Celular Honor X8B', precio: 200 },
    { nombre: 'Portatil hp', precio: 1200 },
    { nombre: 'Teclado', precio: 10 }




];




//****************************    ForEach   ***************************


/* 
1. se puede utilizar unicamente para arreglos


*/

/* Esta es la forma basica */
carrito.forEach(function (producto) {

    console.log(producto)
});


/* Esta es con arrow funtion */

carrito.forEach(producto => console.log(producto));




//****************************    map  ***************************


carrito.map(producto => console.log(producto));




/* aca se esta creaundo un nuevo arreglo utilizando valores del arreglo de carrito */
const carrito2 = carrito.map(producto => producto.nombre);

console.log(carrito2)

/* Diferencias y casos de usos del ForEach y el map



1. forech no retorna nada , solo itera los elementos y uno de sus usos puede ser para imprimir tambien

2. para crear nuevos arreglos 

    const carrito2 =carrito.map(producto => producto.nombre);



*/



