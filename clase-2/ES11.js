/* 
Operador nullish. Sirve para poder colocar un valor por default a variables que podrían ser nulas o indefinidas, 
a diferencia del operador ||, éstas filtran “falseys”
Variables privadas dentro de las clases, esto permite que algunas variables no sean accesibles desde 
el entorno de instancia de una clase y sólo sea utilizada de manera interna.
*/

// Operador nullish

let variablePrueba = undefined;

let variableAsignable = variablePrueba || "Sin valor";
// console.log(variableAsignable);

let variableConNullish = variablePrueba ?? "Sin valor";
// console.log(variableConNullish);

// Variable privadas en las clases

class Person {
    #fulName; // Variable es privada
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
        this.#fulName = `${this.name} ${this.lastName}`;
    }

    // Getter
    getFullName() {
        console.log(this.#fulName);
    }

    // Setter
    setFullName(newFullName) {
        this.#fulName = newFullName;
    } 
}


const pepe = new Person("Pepe", "Sapo");

pepe.getFullName();

pepe.setFullName("Sapo Pepe");

pepe.getFullName();