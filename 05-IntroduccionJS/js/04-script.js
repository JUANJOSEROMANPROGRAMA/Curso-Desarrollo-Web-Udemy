const tweet = 'Aprendiendo JavaScript con el curso de Desarrollo Web Completo"'; //String o cadena de texto    ESTA ES LA QUE MAS SE UTILIZA
const producto1 = String ('Monitor de 30 pulgadas'); //String o cadena de texto


console.log(tweet.length);// .length para enumerar el  tamaño de caracteres en cade de texto
console.log(producto1);  

// IndexOf    para ver en que posicion se encuuentra un texto que se busca

console.log(tweet.indexOf('curso')); // retorna la posicion en la que se encuentra 
console.log(producto1.indexOf('curso'));  // si retorna -1 es porque no se encuentra el texto que se busca



//Include   (es tipo boleando retorna true o false)
console.log(tweet.includes('curso'));
console.log(producto1.includes('curso'));  // si retorna -1 es porque no se encuentra el texto que se busca
