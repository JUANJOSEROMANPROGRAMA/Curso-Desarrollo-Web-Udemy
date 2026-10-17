//****************************    PROMISES   ***************************





/* 
USOS DE LA VIDA REAL
1.Cosultas con APIS
2. Peticiones HTTP
3. Aplicaciones web,inicios de seccion y formularios    
*/


const usuarioAutenticado = new Promise((resolve, reject) => {


    const auth = false;


    if (auth) {
        /* se ejecuta el resolve cuando el promise se cumple */
        resolve('El usuario esta autenticado');

    } else {
        /* se ejecuta el reject cuando el promise no se cumple */
        reject('El usuario no esta autenticado');

    }

});


/* Manera normal */
/* usuarioAutenticado
    .then(function (resultado) {

        console.log(resultado)
    })
    .catch(function (error) {


        console.log(error)
    }) */




/* Con ArrrowFunction */
usuarioAutenticado
    .then((resultado) => console.log(resultado))
    .catch((error) => console.log(error))



/* Existen 3 valores en los promises

Pending: no se ha cumplido pero se ha rechazado
Fulfield: Ya se cumplio
Rejected: Se ha rechazado o se pudo cumplir

*/