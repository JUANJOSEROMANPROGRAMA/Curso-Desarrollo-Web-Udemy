
//****************************  FUNCIONES EN JS     ***************************


// declaracion de la funcion



function sumar() {

    console.log(10 + 10)

}


sumar();


//Expresion de la funcion


const sumar2 = function () {
    console.log(3 + 3);


}

sumar2();


//IIFE

// para proteger variables y que no se mezlcen con otros archivos
(function(){

    console.log('esto es una funcion');
})();







//****************************   DIFERENCIAS ENTRE LAS 2 FUNCIONES    ***************************


/* 
Hosting: js ejecuta el codigo en 2 vueltas

1__registro de funciones y variables
2__ejecucion del codigo


la 1 (declaracion ) no maracara error si la funcion se manda a llamar antes de la funcion  ya que se registra en la primera vuelta y se ejecuta en la 2

En cambio, la expresión de función se asigna a una variable.
Si usamos const o let, no se puede llamar antes de inicializarla.



Diferencias:
- Declaración: se puede llamar antes de declararla.
- Expresión: se debe inicializar antes de llamarla.
- IIFE: se declara y ejecuta inmediatamente, creando su propio ámbito.

 */