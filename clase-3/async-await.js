/* 
Cuando necesitamos más que sólo una operación para poder ejecutar algo asíncrono, no basta con el uso de 
una promesa solamente, sino que necesitamos un entorno completo para poder ejecutar dichas operaciones .then 
en este caso sólo nos sirve para encadenar las promesas y obtener sus resultados, pero no nos permite un 
entorno completo asíncrono para trabajar, por lo cual nos obliga a trabajar TODO dentro de ese scope
Además, el principal problema de los .then y .catch son su encapsulamiento excesivo, impidiendo o limitando 
que podamos acceder a los recursos de algunos resultados, variables, etc.

Surge entonces en Javascript el soporte para Async - Await, unas palabras reservadas que, trabajando juntas, 
permiten gestionar un entorno asíncrono, resolviendo las limitantes del .then y .catch
- async se colocará al inicio de una función, indicando que todo el cuerpo de esa función deberá 
ejecutarse de manera asíncrona
- await servirá (como indica su nombre) para esperar por el resultado de la promesa y extraer su resultado.
Al ser operaciones que podrían salir bien, PERO TAMBIÉN MAL, es importante encerrar el cuerpo en un 
bloque try {} catch {}
*/

const dividir = (dividendo, divisor) => {
    
    return new Promise( (resolve, reject) => {
        if(divisor === 0) {
            // No se cumple la promesa 
            reject("No se puede hacer divisiones entre 0");
        } else {
            // Cuando se cumple la promesa
            resolve(dividendo/divisor);
        }
    } )
};


const asyncFunction = async () => {
    try{
        // Cuando se resuelve la promesa 
        const result = await dividir(9,3);
        console.log(`Resultado: ${result}`);

    } catch (error) {
        // Cuando se rechaza la promesa 
        console.log(`Error: ${error}`);
    }
}

asyncFunction();