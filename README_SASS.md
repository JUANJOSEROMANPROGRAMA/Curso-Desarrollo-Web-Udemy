## SASS......Syntatically Awesome StyleSheet

CSS con superpoderes

## Ventajas de SASS

* Mejor orden y estructura
* Caracteristicas que no exixten en css o con mejor sporte
* soporta codigo de CSS

## Desventajas de SASS

* nueva sintaxis por aprender
* no es nativa en el navegador
* se debe compilar con alguna herramienta
* la anidacion puede causar problemas

# Sintaxis de SASS

```
// VARIABLES
$color :#e1e1e1;
$sparacion:5rem;
$fuente: Arial ,Helvetica;


//COMO SE UTILIZA
h1{

    color: $color;

}
p{

    color:$color;

}

```

## Anidacion SASS

```

//SINTAXIS de anidaccion en sass

div
      display:flex;
  
      h1 
        margin-top:10rem;
      p
        margin-top:10rem;
  

//Resultado equivalente 
div{

    display:flex;
}

div h1{

    margin-top:10rem;
}
div p{

    margin-top:10rem;
}
```

## Extensiones de SASS

### .sass

```
.hader
      display:flex;
      .logo
          margin-top:10rem;
```


### .scss


```
.header{

    disply:flex;
    .logo{
          maring-top:10rem;
    }
}
```


## SASS se compila

No es soportado nativmnete por el navegador , por lo tanto debera ser compulado a un archivo .css

se utiliza una herramienta llamda Gulp.js


## Gulp.js

Gulp es una herramienta que nos ayudara a automatizar tareas repetitivas en desarrollo web tales como:

* compilar SASS y JS
* Crear imagenes ligeras
* minificar codigo de produccion

se requiere instalar Node.js y NPM para poder usar Gulp.js


## ¿Que es Node.js?

Es un entorno que permite ejecutar JavaScript en el servidor.


## ¿Que es NPM?

Node Package Manager , es un sistema de gestion de paquetes para el lenguaje de programacion JavaScript. el es administrador de paquetes por defecto para el entorno de ejecuccion de Node.js
