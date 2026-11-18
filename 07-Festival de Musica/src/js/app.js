document.addEventListener('DOMContentLoaded', function name() {
    CrearGaleria();

})






function CrearGaleria() {

    const cantidad_imagenes = 16;
    const galeria = document.querySelector('.galeria-imagenes')


    for (let i = 1; i <= cantidad_imagenes; i++) {

        const imagen = document.createElement('IMG')

        imagen.src = `src/img/gallery/full/${i}.jpg`
        imagen.alt = 'Imagen Galeria'



        //event Handler

        imagen.onclick = function () {

            //alert('diste click')
            mostrarImagen(i);
        }



        galeria.appendChild(imagen)
    }

}


function mostrarImagen(i) {

    const imagen = document.createElement('IMG')

    imagen.src = `src/img/gallery/full/${i}.jpg`
    imagen.alt = 'Imagen Galeria'





    //generar modal

    const modal = document.createElement('DIV')
    modal.classList.add('modal');
    modal.onclick = cerrarModal;

    modal.appendChild(imagen)

    //agregar al html

    const body = document.querySelector('body')
    body.classList.add('overflow-hidden')
    body.appendChild(modal)

}



function cerrarModal() {

    const modal = document.querySelector('.modal')
    modal.classList.add('fade-out')


    // modal?....lo que hace esque si la clase modal existe la elimina ,similiar al if
    setTimeout(() => {
        modal?.remove()

        const body = document.querySelector('body')
        body.classList.remove('overflow-hidden')

    }, 500);


}