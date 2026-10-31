
/* la palabra de export es clave para poder que se ejecute la funcion desde otra hoja de comandos , sin es palabra no se encuentra y marcara error */


export function hola(done) {

    console.log('hola desde Gulpfile.js')
    
    
    done()


}


/* se manda como parametro la palabra reservada de done y luego se llama dentro de la funcion para avisarle a guulp que ya se termino de llamar la funcion */