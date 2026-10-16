
//****************************     POO clases en JavaScript  ***************************


/* Clase */
class Mascota {

    /* Contructor */
    constructor(nombre, tipo, edad, raza, dueño) {

        this.nombre = nombre;
        this.tipo = tipo;
        this.edad = edad;
        this.raza = raza;
        this.dueño = dueño;

    }

    /* Metodo */

    formatearMascota() {

        return `La mascota tipo ${this.tipo} se llama ${this.nombre},de raza ${this.raza} ,cuya edad es ${this.edad} años y su dueño se llama ${this.dueño}`;

    }



    NombreMascota_dueño() {

        return `La mascota se llama ${this.nombre}, y su dueño se llama ${this.dueño}`;

    }

}

/* Creacion de un nuevo objeto */
const Mcqueen = new Mascota('Mcqueen', 'Gato', 3, 'Criollo', 'JuanJose');
const Lucas = new Mascota('Lucas', 'Perro', 8, 'Crespuder', 'Valentina')



/* Imprimir de manera normal y con su respectivo metodo de formateo */
console.log(Mcqueen);
console.log(Mcqueen.formatearMascota());
console.log(Mcqueen.NombreMascota_dueño());



console.log(Lucas);
console.log(Lucas.formatearMascota());
console.log(Lucas.NombreMascota_dueño());





/* Clase Libro */


class Libro {


    constructor(nombre, genero, precio, isbn) {

        this.nombre = nombre;
        this.genero = genero;
        this.precio = precio;
        this.isbn = isbn;

    }


    formatearLibro() {
        return ` Nombre:${this.nombre} , Precio:${this.precio}`;

    }


}


const libro1 = new Libro('Caballo de troya: Jerusalem', 'Ficccion', 75.000, '978-958-42-2825-3');


console.log(libro1)
console.log(libro1.formatearLibro())





//****************************    HERENCIA   ***************************





/* Clase Producto */

/* class Producto(elnombre de la nueva clase hija) extends(palabra reservada) Libro(nombre de la clase padre) */



class Producto extends Libro {


    constructor(nombre, precio, categoria, tipo) {
        super(nombre, null, precio, null);
        /* siempre dentro del contructor de la clase hija se coloca la palabra reservada super y adentro los atributos de la clase padre que se desea heredar
        super(nombre,null,precio,null);
        
        el orden l recibir y pasar los parametros entre clases si importa
        
        
        
        */
        this.categoria = categoria;
        this.tipo = tipo;
    }



    formatearProducto() {

        return `${super.formatearLibro()} su categoria es: ${this.categoria} y su tipo es :${this.tipo}`

    }

}


const producto1 = new Producto('Alexa echo show 5', 2000, 'Domotica', 'Electrodomestico')

console.log(producto1);
console.log(producto1.formatearProducto());

