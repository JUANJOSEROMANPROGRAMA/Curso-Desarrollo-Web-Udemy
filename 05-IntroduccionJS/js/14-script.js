



//**************************** ARREGLOS O ARRAYS      ***************************



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






//****************************     //iteraador foreach  ***************************/* 

/* meses.forEach(function(meses){

console.log(meses);
})  */


// ***************METODOS DE ARREGLO*****************

        //***************AGREGAR*****************
numeros.push(1010)//agregar un numero al final de arreglo

numeros.push(11,12,23,34)//varios numeros a la  vez


numeros.unshift(-1,-2,-3)// agregar numeros al inicio del arreglo










//****************************   ELIMINAR    ***************************

meses.pop() //elimima eñ ultimo elemto del arreglo
meses.shift()// elimina el primero del arreglo

meses.splice(2,1)//recorre el arreglo, llega la posicion 2 y elimina un elemento a la derecha


console.table(meses)
console.table(numeros)







//****************************    Rest Operator O Spreand Operator   ***************************


const NuevoArreglo = [...meses, 'Junio'];  // copia el arreglo de meses y le asigana el nombre NuevoArreglo, luego le agrega el valor al final del nuevo arreglo

const NuevoArreglo1 = ['Junio',...meses]; // este hace lo mismo pero agrega al inicio



console.log(NuevoArreglo)
console.log(NuevoArreglo1)
