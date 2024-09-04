
const suma = (num1, num2) => {
    
    return new Promise( (resolve, reject) => {
        if(num1 + num2 === 0) {
            reject("Operación innecesaria");
        } else if ( num1 + num2 < 0) {
            reject("La calculadora solo debe devolver números positivos");
        } else {
            resolve(num1 + num2);
        }
    } )
}



const resta = (num1, num2) => {
    
    return new Promise( (resolve, reject) => {
        if(num1 - num2 === 0) {
            reject("Operación inválida");
        } else if (num1 - num2 < 0) {
            reject("La calculadora solo debe devolver números positivos");
        } else {
            resolve(num1 - num2);
        }
    } )
}



const multiplicar = (num1, num2) => {
    
    return new Promise( (resolve, reject) => {
        if(num1 < 0 || num2 < 0) {
            reject("Solo se admiten números positivos");
        } else if (num1 * num2 < 0){
            reject("La calculadora solo debe devolver números positivos");
        } else {
            resolve(num1 * num2);
        }
    } )
}

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


const calcular = async (operacion, num1, num2) => {
    try {

        switch (operacion) {
            case "suma":
                const resultSuma = await suma(num1, num2);
                console.log(`El resultado de la suma es: ${resultSuma}`);
                break;
            case "resta":
                const resultResta = await resta(num1, num2);
                console.log(`El resultado de la resta es: ${resultResta}`);
                break;
            case "multiplicar":
                const resultMultiplicar = await multiplicar(num1, num2);
                console.log(`El resultado de la multiplicación es: ${resultMultiplicar}`);
                break;
            case "dividir":
                const resultDividir = await dividir(num1, num2);
                console.log(`El resultado de la división es: ${resultDividir}`);
                break;
            default:
                console.log("Operación invalida");
                break;
        }

        
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

calcular("dividir", 10, 5);


