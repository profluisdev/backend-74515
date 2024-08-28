
// Scope Global
let nombre = "Juan";

// Scope Local
if(true) {
    let nombre = "Pepe";
}

console.log(nombre);

let edad = 10;
edad = 5;
edad = "5"

// const 

const apellido = "Perez";
// apellido = "Diaz"; no se puede hacer

// Mutabilidad de las constantes 

const persona = {
    nombre: "Juan",
    apellido: "Perez"
};

console.log(persona);

persona.apellido = "Diaz";

console.log(persona);

persona.edad = 40;

console.log(persona);