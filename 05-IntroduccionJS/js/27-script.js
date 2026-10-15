//****************************   POO    ***************************



/* Objet literal */


const producto = {

    nombre: 'monitor de 20',
    precio: 300


}


/* Objet Constructor */
function Producto(nombre, precio) {

    this.nombre = nombre;
    this.precio = precio;

}


const Producto2 = new Producto('Monitor de 50 pulgadas', 2500);

const producto3 = new Producto('Guante de softball',200)


console.log(Producto2)
console.log(producto3)
