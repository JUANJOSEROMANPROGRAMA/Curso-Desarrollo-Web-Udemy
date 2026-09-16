// objetos

/* 

Esta seria la forma si no se usara la creacion de objetos


const nombreProducto = 'Monitor 20 pulgadas';
const precio = 300;
const disponible = true; */


const producto ={

nombreProducto: 'Monitor 20 pulgadas',
precio : 300,
disponible :true


}


/* 
console.log(producto.nombreProducto);// para solo imprimir la variable
console.log(producto["precio"]);// otra forma de imprimir la variable

 */


//agregar nuevas propiedades al objeto
producto.imagen = 'imagen.jpg;'

//eliminar propiedades al objeto
delete producto.disponible


console.log(producto);
