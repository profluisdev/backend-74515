/* 
Las operaciones síncronas son bloqueantes, esto significa que las otras tareas no pueden comenzar a ejecutarse
hasta que la primera no haya terminado de ejecutarse.
*/

console.log("Inicio del programa");

const dos = () => {
    console.log("Dos");
};

const uno = () => {
    console.log("Uno");

    dos();

    console.log("Tres");
};

uno();

console.log("Fin del proceso");
