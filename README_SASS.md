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
