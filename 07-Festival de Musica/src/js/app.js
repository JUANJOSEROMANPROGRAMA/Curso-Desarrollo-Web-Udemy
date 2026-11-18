document.addEventListener('DOMContentLoaded', function name() {

    navegacionFija();
    CrearGaleria();
    resaltarEnlace();
    ScrollNav();

})


function navegacionFija() {

    const header = document.querySelector('.header')
    const sobreFestival = document.querySelector('.sobre-festival')


    window.addEventListener('scroll', function () {


        // esto verfica si ya se dio scroll lo suficiente para pasar el elemento
        if (sobreFestival.getBoundingClientRect().bottom < 1) {
            header.classList.add('fixed')


        } else {

            header.classList.remove('fixed')
        }
    })

}



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




    //bton cerrar modal

    const cerrarModadlBTN = document.createElement('DIV')
    cerrarModadlBTN.textContent = 'X'
    cerrarModadlBTN.classList.add('btn-cerrar')
    cerrarModadlBTN.onclick = cerrarModal

    modal.appendChild(imagen)
    modal.appendChild(cerrarModadlBTN)



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



function resaltarEnlace() {

    document.addEventListener('scroll', function () {
        const sections = document.querySelectorAll('section')
        const navlinks = document.querySelectorAll('.navegacion-principal a')

        let actual = ' ';
        sections.forEach(section => {
            const sectionTop = section.offsetTop
            const sectionHeight = section.clientHeight

            //operacion para detectar que seccion esta mas visible en el navegador 
            if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                actual = section.id
            }
        })

        navlinks.forEach(link => {
            link.classList.remove('active')
            if (link.getAttribute('href') === '#' + actual) {
                link.classList.add('active')
            }
        })
    })
}


function ScrollNav(){

    const navLinks= document.querySelectorAll('.navegacion-principal a')

    
    navLinks.forEach(link =>{
    
        link.addEventListener('click', e=>{
        
        e.preventDefault()
        const seccionScroll = e.target.getAttribute('href')
        const section = document.querySelector(seccionScroll)
        
        section.scrollIntoView({behavior: 'smooth'})
        
        })
    
    })


}