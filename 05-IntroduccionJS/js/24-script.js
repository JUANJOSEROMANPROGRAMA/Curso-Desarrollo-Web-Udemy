
//****************************  Bucles     ***************************


const carrito = [

    { nombre: 'Monitor de 25 pulgadas', precio: 200 },
    { nombre: 'TV TCL', precio: 4000 },
    { nombre: 'Guante de softball', precio: 500 },
    { nombre: 'camiseta yankees', precio: 530 },
    { nombre: 'Celular Honor X8B', precio: 200 },
    { nombre: 'Portatil hp', precio: 1200 },
    { nombre: 'Teclado', precio: 10 }




];






//****************************    FOR   ***************************

/* 


for (let i = 0 ; i < carrito.length; i++) {




        if(carrito[i].nombre === 'TV TCL'){
        
            console.log('si existe')
        }


    console.log(carrito[i]);
}


 */







//****************************    WHILE   ***************************

let j = 1;

while (j < carrito.length) {

    console.log(carrito[j].nombre);

    j++;

}







//****************************  DO  WHILE   ***************************


let k = 0;



do {

    console.log(k)

    k++


} while (k < 10);