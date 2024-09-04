/* 
Un callback es una función como cualquier otra, la diferencia está en que ésta se pasa como parámetro 
(argumento) para poder ser utilizado por otra función.
Permite que entonces las funciones ejecuten operaciones adicionales dentro de sí mismas.
Cuando pasamos un callback, lo hacemos porque no siempre sabemos qué queremos que se ejecute en cada caso 
de nuestra función.
*/


const arrayOriginal = [1, 2, 3, 4, 5];
console.log(arrayOriginal);

const newArray = arrayOriginal.map( ( num ) => num + 1 );
console.log(newArray);

const separarPares = (valor) => {
    if(valor % 2 === 0 ) {
        return valor
    }
    return "No es par";
}

const soloPares = arrayOriginal.map( separarPares );

console.log(soloPares);