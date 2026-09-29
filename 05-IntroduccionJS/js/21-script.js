
//****************************   ARROW FUNCTIONS    ***************************




/* 
Importante : solo se puede usar con fucnciones de expresion...no de declaracion

*/




/* 
const sumar2 = function () {
    console.log(3 + 3);


}
*/

const sumar2 = (n1, n2) => console.log(n1 + n2);   // se elimina la palabra reservada funtion ... se agrega => ... se eliminan las llaves y se dejan en una sola linea de comandos toda la funcion

sumar2(5, 10);



const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`)   // cuando se recibe un solo valor se puede eliminar los parentesis

aprendiendo(`Javascript`);









/* ====================================================================================================== */





const meses = ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE ', 'DICIEMBRE'];



// arrelgo con objetos
const carrito = [

    { nombre: 'Monitor de 25 pulgadas', precio: 200 },
    { nombre: 'TV TCL', precio: 4000 },
    { nombre: 'Guante de softball', precio: 500 },
    { nombre: 'camiseta yankees', precio: 530 },
    { nombre: 'Celular Honor X8B', precio: 200 },
    { nombre: 'Portatil hp', precio: 1200 },
    { nombre: 'Teclado', precio: 10 }




];






//****************************    forEach  ***************************




/* ForEach de la pgaina 15 transformada en un arrow funtions */
meses.forEach(mes => {

    if (mes == 'MARZO')
        console.log('si existe')
});




/* let resultado1 = carrito.some(function (producto) {
    return producto.nombre == 'TV TCL'
})

console.log(resultado1)
 */

let resultado1;
resultado1 = carrito.some(producto => producto.nombre === 'TV TCL');

console.log(resultado1)


/* let resultado3 = carrito.reduce(function (total, producto) {

    return total + producto.precio
}, 0);

console.log(resultado3) */


let resultado3 = carrito.reduce( (total, producto) =>   total + producto.precio,0 );

console.log(resultado3)



/* 

const resultado_filter = carrito.filter(function(producto){

    return producto.precio == 200; // ESTA ES LA CONDICION DEL FILTRO

});*/



const resultado_filter = carrito.filter(producto => producto.precio == 200);


const resultado_filter_without_ccel = carrito.filter(producto => producto.precio !== `Celular`);


console.log(resultado_filter_without_ccel);