// Arreglos o Arrays



const numeros = [1,2,3,4,5,6,7]

console.table(numeros)//muestra los datos en una tabla para ver mejor


const meses = new Array ('ENERO', 'FEBRER0','MARZO','ABRIL','MAYO','JUNIO','AGOST0','SEPTIEMBRE','OCTUBRE','NOVIEMBRE','DICIEMBRE')  // forma de crear un arreglo con un constructor

console.table(meses)

const arreglo = [1,2,3 ,"juanjo",true,[1,2,3,4], juanjo="programador"] // SE PUEDE MEZCLAR EL TIPO DE DATOS DENTRO DEL ARRAY

console.table(arreglo)


//acceder a los valores del arreglo

console.log(meses[8])  //los arreglos en js empiezan desde 0


//conocer el tamaño de los arrays

console.log(arreglo.length)


//iteraador foreach

meses.forEach(function(meses){

console.log(meses);
})