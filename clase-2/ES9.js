/* 
Las principales funcionalidades de este release son:
Resolvedores de promesas con .finally(), para atender una promesa, se cumpla o no se cumpla. (Lo veremos más adelante)
Mayor control a los objetos con operadores rest y spread (aplicable también a arrays)
*/

// Operador spreed

let object1 = {
    prop1: 1,
    prop2: 2,
};

// console.log(object1);

let object2 = {
    ...object1, // el operado spreed hace una copia de las propiedades del objeto
    prop3: 3,
    prop4: 4,
    prop2: "2",
};

// console.log(object2);

// Operador rest
let { prop2, ...propsNumbers } = object2;

// console.log(prop2);
console.log(propsNumbers);

const user = {
    id: 23,
    name: "Ana",
    email: "ana@gmail.com", 
    password: "123",
    age: 23
};

const {id, password, ...userAna } = user;

console.log(userAna);