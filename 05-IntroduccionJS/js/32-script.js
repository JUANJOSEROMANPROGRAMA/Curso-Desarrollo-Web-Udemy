//****************************  FECHT API     ***************************



async function ObtenerEmpleados() {



    const archivo = 'js/empleados.json'



/* fetch api con promises */
    // fetch(archivo)

    //     .then(resultado => resultado.json())
        

    //     .then(datos => {

    //         const {empleados}=datos;
            
    //         //console.log(empleados);



    //         empleados.forEach(empleado => {
                
                
    //             /* muestra elemento por elemtno del arreglo  */
    //             console.log(empleado);
    //             console.log(empleado.);
                
                
                
    //         });
    
    //     })

}


/* fect api con assyn await */
const resultado = await fetch(archivo);
const datos = await resultado.json


console.log(datos)

ObtenerEmpleados();