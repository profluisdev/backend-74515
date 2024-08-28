class Person {
    // El constructor es el método (función) que se ejecuta al instanciar una clase
    constructor(name, lastName, age) {
        /* 
    Los atributos de la clase son variables internas, que se le puede asignar un valor inicial por defecto o 
    asignarle un valor al momento de instanciar una clase, se le antepone la palabra this para determinar que 
    la variable que pertenece a la clase.
    */
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.status = true;
        this.balance = 0;
    }

    static specie = "Humano";

     /* 
Las propiedades estáticas están asociadas a la clase y no al objeto que se instancia, 
por lo tanto podemos acceder y modificar las propiedades estáticas sin la necesidad 
de instanciar una clase.
*/

    // Método
    showPerson() {
        console.log(`Nombre: ${this.name} Apellido: ${this.lastName} Edad: ${this.age} Status: ${this.status}`);        
    }

    changeName(newName) {
        this.name = newName;
    }

    deposit(amount) {
        this.balance = this.balance + amount;
    }
}


let maria = new Person("Maria", "Perez", 30);
let miguel = new Person("Miguel", "Gomez", 22);

console.log(maria);

maria.deposit(1000);

console.log(maria);

maria.deposit(500);

console.log(maria);

console.log(miguel);

console.log(Person.specie);