import path from 'path'
import fs from 'fs'

import { src, dest, watch, series } from 'gulp';


import gulpSass from 'gulp-sass'
import * as  dartSaas from 'sass'



/* la palabra de export es clave para poder que se ejecute la funcion desde otra hoja de comandos , sin es palabra no se encuentra y marcara error */



// /* funcion que saluda e consola desde un archivo gulpfile.js */
// export function hola(done) {

//     console.log('hola desde Gulpfile.js')


//     done()


// }


/* se manda como parametro la palabra reservada de done y luego se llama dentro de la funcion para avisarle a guulp que ya se termino de llamar la funcion */




/* funcion que marca que se va compilar saas usando la dependecia de gulpsass */
const sass = gulpSass(dartSaas)

import terser from 'gulp-terser';
import sharp from 'sharp';

export function js(done) {

    src('src/js/app.js')
        .pipe(terser())
        .pipe(dest('build/js'))

    done()


}

export function css(done) {

    src('src/scss/app.scss', { sourcemaps: true })
        .pipe(sass({
            style: 'compressed'
        }).on('error', sass.logError))
        .pipe(dest('build/css'), { sourcemaps: '.' })


    done()
}


export async function crop(done) {
    const inputFolder = 'src/img/gallery/full'
    const outputFolder = 'src/img/gallery/thumb';
    const width = 250;
    const height = 180;
    if (!fs.existsSync(outputFolder)) {
        fs.mkdirSync(outputFolder, { recursive: true })
    }
    const images = fs.readdirSync(inputFolder).filter(file => {
        return /\.(jpg)$/i.test(path.extname(file));
    });
    try {
        images.forEach(file => {
            const inputFile = path.join(inputFolder, file)
            const outputFile = path.join(outputFolder, file)
            sharp(inputFile)
                .resize(width, height, {
                    position: 'centre'
                })
                .toFile(outputFile)
        });

        done()
    } catch (error) {
        console.log(error)
    }
}


/* para aplicar el watch al gulpfile */
export function dev() {


    /* el watch es una funcion predeterminada que se puede importar desde watch....solo seria llamar la funcion y pasarle como parametro cual es el archivo al que se desea que se le haga seguimiento */
    watch('src/scss/**/*.scss', css)
    watch('src/js/**/*.js', js)




}

/* export default series lo que hace es que se le pasa por parametros las funciones que se desean para ejecutar en una sola llamada  */
export default series(crop,js, css, dev)

/* como esta especificada por default al llamar en los script del package.json solo se llama asi

"dev":"gulp"

*/