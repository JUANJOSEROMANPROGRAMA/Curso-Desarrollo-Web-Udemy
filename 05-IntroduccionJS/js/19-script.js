
//****************************  FUNCIONES  QUE RETORNAN VALORES     ***************************




function sumar(n1, n2) {


    return n1 + n2;

}


const resultado = sumar(2, 3);


console.log(resultado);



function calcularImpuesto(total){

    return 1.15 * total;

}





let total = 0;


function agregarCarrito(precio) {

    return total += precio;
}


total = agregarCarrito(1200);

const totalApagar = calcularImpuesto(total);


console.log(total)
console.log(`el total a pagar es de: $${totalApagar} `); // aca es necesario altgr + ` (se encuentra en la teclq que cierra llave)


