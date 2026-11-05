import { src, dest ,watch} from 'gulp';


import gulpSass from 'gulp-sass'
import * as  dartSaas from 'sass'



/* la palabra de export es clave para poder que se ejecute la funcion desde otra hoja de comandos , sin es palabra no se encuentra y marcara error */



// /* funcion que saluda e consola desde un archivo gulpfile.js */
// export function hola(done) {

//     console.log('hola desde Gulpfile.js')


//     done()


// }


/* se manda como parametro la palabra reservada de done y luego se llama dentro de la funcion para avisarle a guulp que ya se termino de llamar la funcion */




/* uncion que marca que se va compilar saas usando la dependecia de gulpsass */
const sass = gulpSass(dartSaas)



export function css(done) {

    src('src/scss/app.scss')
        .pipe(sass().on('error',sass.logError))
        .pipe(dest('build/css'))


    done()
}


/* para aplicar el watch añ gulpfile */
export function dev(){


/* el watch es una funcion predeterminada que se puede importar desde watch....solo seria llamar la funcion y pasarle como parametro cual es el archivo al que se desea que se le haga seguimiento */
    watch('src/scss/**/*.scss',css)
    
    


}