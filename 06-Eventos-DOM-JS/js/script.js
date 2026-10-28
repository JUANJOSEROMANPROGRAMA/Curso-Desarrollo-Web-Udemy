//**************************** querySelector      ***************************



/* 


1. retorna 0 o ningun elemento que concuerde con el selector (Se limita a solo un elemento asi tenga varios con el mismo selector)

2. propiedad para agregar una nueva clase desde el js
    heading.classList.add('nueva-clase)...esto agrega una nueva clase a la variable  definida con que querySelector al HTML

3. Cuando no se encuentra el selector devuelve null
*/







const heading = document.querySelector('.header__texto h2')
console.log(heading);



/* utilizando la variable definida con el querySelector se le pueden atribuir nuevas propiedades y su modificacion en el HTML */
heading.textContent = 'Nuevo Heading';



//****************************   querySelectorAll    ***************************

/* 
1.  retorna 0 si el selector esta mal o no hay ningun elemento o todos los elementos que encuentre con el selector


2. Si se quiere acceder a un elemento en especifico se hace igual a los arreglos

*/
const enlaces = document.querySelectorAll('.navegacion a')


console.log(enlaces)


enlaces[2].textContent = 'enlace cambiado desde Js'
/* Selecciona unicamente el enlace 2 y solo modifica ese */

enlaces[1].classList.add('clase-agregada-desdeJS')
/* Slecciona el enlace y le agrega una clase adiccional */

enlaces[1].remove('navegacion__enlace')
/* selecciona el enlace y le elimina la clase que se espcefica */





//****************************       geteElementById**************************

const heading2 = document.getElementById('heading')




//****************************       Creando HTML con createElement***************************








/* Generar el nuevo enlace */
const nuevoEnlace = document.createElement('A')


/* agregar el href de la pagina a la cual se dirige */
nuevoEnlace.href = 'nueva-pag.html'

/* agregar el texto */
nuevoEnlace.textContent = 'Enlace agregado desdel JS'


/* agregar la clase */

nuevoEnlace.classList.add('navegacion_enlace');


/* agregarlo al documento */


const navegacion = document.querySelector('.navegacion')
navegacion.appendChild(nuevoEnlace)


console.log(nuevoEnlace)



//****************************   Eventos       ***************************


console.log(1);


/* Evento para que cargue completamente la ventana */
window.addEventListener('load', imprimir() //load espera a que ej JS y los archivos que dependen del HTML esten listos




)

window.onload = function () {

    console.log(3)

}


document.addEventListener('DOMContentLoaded', function () {

    console.log(4)

})



console.log(5);


/* diferencia entre load y DOMContentLoaded

    el load espera que descargue el html,css ,img
    el DOMContentLoaded solo espera a que se descargue el HTML sin imagenes ni CSS



*/


function imprimir() {

    console.log(1212)

}




//****************************  Registrar eventos a elementos de HTML     ***************************



const btnEnviar = document.querySelector('.boton--primario');



/* Previene la accion por default de un submit, sin esta linea de codigo al realizar el click la pagina se refrescaria, es util para validar un formulario y verificar que los camps esten llenos para enviar los datos a un servidor */
// btnEnviar.addEventListener('click', function (evento) {

//     console.log(evento);
//     evento.preventDefault();
//     console.log('Enviando Formulario');
// })

/* este es util para imagenes,textos y cualquier elementos*/

//****************************    Eventos de los input o textArea   ***************************




/* este es el objeto de datos donde se van a a guardar los datos del Formulario....IMPORTANTE....los nombres deben ser tal cual a los is de los input de los que se va a registrar  */
const datos = {

    nombre: ' ',
    email: ' ',
    mensaje: ' '


}


const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');


nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);

mensaje.addEventListener('input', leerTexto);


/* 
1. el change se ejecuta hasta que se salga del input
2. input se hace en tiempo real por cada vez que se escribe
*/



/* El evento del Submit */
formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();


    //Validar el formulario

    const { nombre, email, mensaje } = datos;

    console.log(nombre);
    console.log(email);
    console.log(mensaje);




    //Enviar el formulario

    if (nombre === ' ' || email === ' ' || mensaje === ' ') //verificando que el nombre o email o mensaje no esten vacios
    {
        mostrarAlerta('Todos los campos son obligatorios', 'error');

        return;// corta la ejecucion del codigo de manera que si no se cumple el if no siga con e resto de codigo
    }



    mostrarAlerta('Formulario enviado correctamente');

})

/* Para formularios es mejor usar el submir enlazado a la clase del formulario(obligatoriamente debe de tener un boton tipo submit en el formulario) */



function leerTexto(e) {


    // console.log(e.target.value);
    datos[e.target.id] = e.target.value

    // console.log(datos)

}


// /* Funcion que muestra un error en panatalla */


// function mostrarError(mensaje) {

//     const error = document.createElement('p');
//     error.textContent = mensaje;
//     error.classList.add('error');


//     formulario.appendChild(error);
//     console.log(error);



//     //desaparezca despues de 5 segundos

//     setTimeout(() => {
//         error.remove();
//     }, 5000);

// }


// /* funcion que alerta que se envio correctamente */

// function MostrarCorrecto(mensaje) {

//     //crea la variable alerta que sera usada para crear un parrafo en el HTML
//     const alerta = document.createElement('P');

//     //Se le asigna el mensaje que paso por parametro de la funcion a la variable
//     alerta.textContent = mensaje;


//     //se le agrega la clase correcto a la variable 
//     alerta.classList.add('correcto');


//     //se agrega la alerta al formulario
//     formulario.appendChild(alerta)



//     //  que el mensaje desaparezca a los 3s
//     setTimeout(() => {
//         alerta.remove();
//     }, 3000);


// }


/* esta funcion es para tener las alaertas en una sola funcion en vez de 2 */

function mostrarAlerta(mensaje, error = null) {

    const alerta = document.createElement('p');

    alerta.textContent = mensaje;


    if (error) {
        alerta.classList.add('error');


    } else {

        alerta.classList.add('correcto')

    }

    formulario.appendChild(alerta)

    setTimeout(() => {
        alerta.remove();
    }, 3000);

}