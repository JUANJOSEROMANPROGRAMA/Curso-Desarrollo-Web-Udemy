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
heading.textContent= 'Nuevo Heading';



//****************************   querySelectorAll    ***************************

/* 
1.  retorna 0 si el selector esta mal o no hay ningun elemento o todos los elementos que encuentre con el selector


2. Si se quiere acceder a un elemento en especifico se hace igual a los arreglos

*/
const enlaces = document.querySelectorAll('.navegacion a')


console.log(enlaces)


enlaces[2].textContent='enlace cambiado desde Js'
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
nuevoEnlace.href ='nueva-pag.html'

/* agregar el texto */
nuevoEnlace.textContent = 'Enlace agregado desdel JS'


/* agregar la clase */

nuevoEnlace.classList.add('navegacion_enlace');


/* agregarlo al documento */


const navegacion = document.querySelector('.navegacion')
navegacion.appendChild(nuevoEnlace)


console.log(nuevoEnlace)