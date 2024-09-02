/* 
Se introduce el operador exponencial **, independizándose poco a poco de la librería Math.
Manejo de array includes. Éste nos permitirá saber si algún elemento existe dentro del arreglo.
*/

let numbers = [1, 2, 3, 4, 5, 6];
let numbersExponential = numbers.map((number, index) => number ** index); // 1**0 2**1 3**2
// 3**2 = 3 x 3 = 9 - Tres elevado a la dos es igual a nueve
console.log(numbersExponential);

// Include

let names = ["Juan", "Pedro", "Maria", "Ana"];

// El método include() nos devuelve un booleano true o false

if (names.includes("Luis")) {
    console.log("El nombre se encuentra dentro del array");
} else {
    console.log("El nombre no se encuentra dentro del array");
}
