
/* 
fs.promises.writeFile = Para escribir contenido en un archivo. Si el archivo no existe, lo crea. Si existe, lo sobreescribe.
fs.promises.readFile  = Para obtener el contenido de un archivo.
fs.promises.appendFile = Para añadir contenido a un archivo. ¡No se sobreescribe!
fs.promises.unlink= Es el “delete” de los archivos. eliminará todo el archivo, no sólo el contenido.
*/

const fs = require("fs");

const path = "./data/test.txt";
const asyncOperation = async () => {
    try {

        // Crear el archivo 
        await fs.promises.writeFile(path, "1 - Primer mensaje");

        // Leer el archivo
        let message = await fs.promises.readFile(path, "utf-8");
        // console.log(message);

        // Editar el archivo
        await fs.promises.appendFile(path, "\n2 - Segundo mensaje");
        message = await fs.promises.readFile(path, "utf-8");
        console.log(message);

        // Eliminar el archivo
        await fs.promises.unlink(path);
        
    } catch (error) {
        console.log(error);
    }
}

asyncOperation();