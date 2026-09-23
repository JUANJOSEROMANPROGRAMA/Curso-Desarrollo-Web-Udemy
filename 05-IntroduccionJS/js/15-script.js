

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

meses.forEach(function (mes) {

    if (mes == 'MARZO')
        console.log('si existe')
})







//**************************** INCLUDES      ***************************

const resultado = meses.includes('MARZO');   // realiza la validacion de que si existe para ahorrarse el codigo de arriba...devuelve un boleano

console.log(resultado)







//****************************     Some .... ideal para arreglo de objetos  ***************************


let resultado1 = carrito.some(function (producto) {
    return producto.nombre == 'TV TCL'
})

console.log(resultado1)





//**************************** Reduce      ***************************

// iterar pra sumar y ver el total a pagar

let resultado3 = carrito.reduce(function (total, producto) {

    return total + producto.precio
}, 0);

console.log(resultado3)







//**************************** Filter      ***************************
// para filtrar

const resultado_filter = carrito.filter(function(producto){

    return producto.precio == 200; // ESTA ES LA CONDICION DEL FILTRO

});

console.table(carrito)
console.log(resultado_filter);
