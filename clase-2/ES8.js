/* 
Async await para mejor control asíncrono, sobre este ahondaremos más en futuras clases.
Object.entries, Object.values, Object.keys para un mejor control interno sobre las propiedades de un objeto.
*/

let person = {
    id: 1,
    first_name: "Luz",
    last_name: "Escalante",
    age: 25,
    gender: "F",
  };
  
// Objet.entries nos devuelve un array con arrays de dos elementos, en la posición 0 está la key y en la posición 1 el value
let personObjectEntries = Object.entries(person); 
console.log(personObjectEntries);
console.log(personObjectEntries[0][0]); // key
console.log(personObjectEntries[0][1]); // value

// Objet.keys nos devuelve un array con todas las key del objeto
let personObjectKeys = Object.keys(person);

console.log(personObjectKeys);
console.log(personObjectKeys.includes("age"));

// Objet.values nos devuelve un array con todos los values del objeto

let personObjectValues = Object.values(person);
console.log(personObjectValues);

console.log(personObjectValues.includes("F"));


