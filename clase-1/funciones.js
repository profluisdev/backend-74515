/* 
Las funciones son bloques de instrucciones que trabajan sobre un scope interno 
(conocido como scope local). Pueden encontrarse en su sintaxis básica o en su 
notación flecha.
*/

// Funciones tradicionales

function sum(num1, num2, num3) {
    // Scope local de la función
    console.log(num1 + num2 + num3);
}

// llamar a la función
sum(10, 5, 5);
sum(25, 25, 10);

// funciones tradicionales con retorno

function showName(name) {
    return name;
}

// Guardamos la información que retorna la función en la constante;
const name = showName("Juan");

console.log(name);

let name2 = showName("Luz");

console.log(name2);

// Funciones flecha

const rest = (num1, num2) => {
    console.log(num1 - num2);
};

rest(100, 40);

const showLastName = lastName => lastName;

const lastName = showLastName("Perez");

console.log(lastName);

// Template string 

// El nombre es Juan y el apellido es Perez
let nombre = "Juan";
let apellido = "Perez"

console.log(`El nombre es ${nombre} y el apellido es ${apellido}`);

// AltGr + } en teclado español latinoamericano

const showFullName = (nombre, apellido) => {
    console.log(`El nombre es ${nombre} y el apellido es ${apellido}`);
}

showFullName("Pepe", "Diaz");
showFullName("Fabio", "Arias");
