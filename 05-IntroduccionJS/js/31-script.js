//****************************     Async / Await  ***************************




/* 

1. app() se ejecuta.
2. Entra al try y encuentra: await descargarNuevosClientes();
3. descargarNuevosClientes() se inicia e imprime:
   -> "Descargando clientes....Espere..."
4. El temporizador de 5 segundos arranca en segundo plano (Web API).
5. await "pausa" la ejecución EXCLUSIVAMENTE dentro de la función app().
6. El hilo principal de JS queda libre y sigue con el archivo global, imprimiendo:
   -> "ESTE CODIGO NO SE BLOQUEA"
7. Pasan los 5 segundos, la promesa se resuelve con 'Los clientes fueron descargados'.
8. app() se reanuda, asigna el valor a resultado e imprime:
   -> "Los clientes fueron descargados"

*/


function DescargarUltimosPedidos() {

    return new Promise(resolve => {


        console.log('Descargando pedidos....Espere...')



        setTimeout(() => {
            resolve('Los pedidos fueron descargados')
        }, 3000);


    })

}


function descargarNuevosClientes() {

    return new Promise(resolve => {


        console.log('Descargando clientes....Espere...')



        setTimeout(() => {
            resolve('Los clientes fueron descargados')
        }, 5000);


    })

}

async function app() {


    try {


        /* Esto es una mala practica de trabajo con 2 consultas, ya que aparecerian las dos consultas a la vez */
        // const resultado = await descargarNuevosClientes();
        // const pedidos = await DescargarUltimosPedidos();
        // console.log(resultado)
        // console.log(pedidos)


        /* la buena practica seria crear la variable resultado , que seria un arreglo con la funcion Promise.all ,y se colocan las consultas que se vayan a trabajar */
        const resultado = await Promise.all([descargarNuevosClientes(), DescargarUltimosPedidos()]);


        /* la forma de que se imprima correctamente cada funcion seria haciendolo desde el arreglo desde la poscion 0 y sucesivamente hasta la ultima posicion del arreglo */
        console.log(resultado[0]);
        console.log(resultado[1]);







        /* 
        //****************************  OTRA MANERA DE HACERLO APRENDIDO CON GEMINI     ***************************
        
        // En lugar de guardar el arreglo completo en "resultado":
const [clientes, pedidos] = await Promise.all([
    descargarNuevosClientes(), 
    DescargarUltimosPedidos()
]);

// Ahora trabajas directamente con variables descriptivas:
console.log(clientes);
console.log(pedidos);






*************************************************************************************************


// En lugar de acceder por índice:
const resultado = await Promise.all([descargarNuevosClientes(), DescargarUltimosPedidos()]);
console.log(resultado[0]);
console.log(resultado[1]);

// La forma más limpia y moderna en JS:
const [clientes, pedidos] = await Promise.all([
    descargarNuevosClientes(), 
    DescargarUltimosPedidos()
]);

console.log(clientes);
console.log(pedidos);





        
        */


    } catch (error) {
        console.log(error)
    }


}


app();


console.log('ESTE CODIGO NO SE BLOQUEA')


/* 
//****************************   Poner un tiempo de espera a cierta funcion....el valor es en milisegundos     ***************************

setTimeout(() => {
    console.log('set timeout....')
}, 5000);



/* 


//****************************  Eperar en intervalos de tiempo puesto....el valor es en milisegundos      ***************************

setInterval(() => {
    console.log('set timeout........intervalo')
    
}, 1000);
 
 
 
 
 */