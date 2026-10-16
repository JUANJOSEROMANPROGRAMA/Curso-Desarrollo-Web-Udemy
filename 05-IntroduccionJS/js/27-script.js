//****************************   POO    ***************************



/* Objet literal */
const producto = {

    nombre: 'monitor de 20 pulgadas ',
    precio: 300


}


/* Objet Constructor */
function Producto(nombre, precio) {

    this.nombre = nombre;
    this.precio = precio;

}



/* Persona */
function Persona(nombre, edad, profesion) {
    this.nombre = nombre;
    this.edad = edad;
    this.profesion = profesion;


}


const Juanjo= new Persona('Juanjo',22,'Ingeniero Informatico');
console.log(Juanjo)


const Producto2 = new Producto('Monitor de 50 pulgadas', 2500);
console.log(Producto2);




function formatearProducto() {


    return `El producto ${producto.nombre} tiene un precio de $${producto.precio}`;
}
console.log(formatearProducto(Producto2));











/* Protypes */


// permire crear funciones que solo se utilizan en un objeto en especifico


/* Formatear Producto */
Producto.prototype.formatearProducto = function () {


    return `El producto ${this.nombre} tiene un precio de $${this.precio}`;
}


console.log(Producto2.formatearProducto());


/* Formatear Cliente */
Persona.prototype.formatearPersona = function (){


return `El Señor ${this.nombre} con edad de ${this.edad} años ,cuya profesion es ${this.profesion} se encuentra registrado en la base de datos al dia de hoy`
}

console.log(Juanjo.formatearPersona());



const Valentina = new Persona('Valentina ',22 ,'Chef ');


console.log(Valentina);
console.log(Valentina.formatearPersona());