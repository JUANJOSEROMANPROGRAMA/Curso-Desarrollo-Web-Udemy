
//****************************     POO clases en JavaScript  ***************************


/* Clase */
class Mascota{

    /* Contructor */
    constructor(nombre,tipo,edad,raza,dueño){
    
    this.nombre = nombre;
    this.tipo = tipo;
    this.edad = edad;
    this.raza = raza;
    this.dueño = dueño;
    
    }
    
    /* Metodo */
    
    formatearMascota(){
    
    return `La mascota tipo ${this.tipo} se llama ${this.nombre},de raza ${this.raza} ,cuya edad es ${this.edad} años y su dueño se llama ${this.dueño}`;
    
    }
    
    
    
    NombreMascota_dueño(){
    
    return `La mascota se llama ${this.nombre}, y su dueño se llama ${this.dueño}`;
    
    }

}

/* Creacion de un nuevo objeto */
const Mcqueen = new Mascota('Mcqueen','Gato',3,'Criollo','JuanJose');
const Lucas = new Mascota('Lucas','Perro',8,'Crespuder','Valentina')



/* Imprimir de manera normal y con su respectivo metodo de formateo */
console.log(Mcqueen);
console.log(Mcqueen.formatearMascota());
console.log(Mcqueen.NombreMascota_dueño());



console.log(Lucas);
console.log(Lucas.formatearMascota());
console.log(Lucas.NombreMascota_dueño());
