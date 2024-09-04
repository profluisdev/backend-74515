

console.log("Inicio del programa");

const dos = () => {
    setTimeout( () => {
        console.log("Dos");
    }, 1 )
};

const uno = () => {
    setTimeout( () => {
        console.log("Uno");
    }, 1 )
    
    dos();

    console.log("Tres");
};

uno();

console.log("Fin del proceso");


