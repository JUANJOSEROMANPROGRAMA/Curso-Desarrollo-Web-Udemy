const producto = {

    nombreProducto: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true


}


const medidas = {

    peso: '1kg',
    medida: '1metro'

}

const nuevoProducto = { ...producto, ...medidas }// para unir dos objetos la sintaxis es tres puntos acompañdo del nombre del objeto, seguido de como y el otro objeto


console.log(producto);
console.log(nuevoProducto);