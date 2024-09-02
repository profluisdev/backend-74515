/* 
String.trim(): Remueve los espacios innecesarios en una cadena. Sirve para validar cadenas enviadas vacías o eliminar los espacios iniciales y finales.
Array.flat():Remueve anidaciones internas en arrays para dejar un arreglo plano.
*/

// String.trim()

let cadena = "       Hola Mundo       ";
// console.log(cadena);
// console.log(cadena.length);

let cadenaTrim = cadena.trim();

// console.log(cadenaTrim);
// console.log(cadenaTrim.length);

// Array flat

const array = [1, 2, 3, 4, [5, 6, 7], [8, 9, 10]];
console.log(array);
console.log(array.length);

console.log(array.flat());
console.log(array.flat().length);


