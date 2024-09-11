/* 
Las principales operaciones que podemos hacer con fs síncrono son:
writeFileSync = Para escribir contenido en un archivo. Si el archivo no existe, lo crea. Si existe, lo sobreescribe.
readFileSync = Para obtener el contenido de un archivo.
appendFileSync = Para añadir contenido a un archivo. ¡No se sobreescribe!
unlinkSync = Es el “delete” de los archivos. eliminará todo el archivo, no sólo el contenido.
existsSync = Corrobora que un archivo exista!
*/

const fs = require("fs"); // Obtenemos el módulo de fs

const path = "./archivo.txt";

// Crear un archivo de texto
fs.writeFileSync(path, "1 - Este es un texto de prueba"); // Path del archivo, contenido del archivo

// Validamos si existe el archivo
if (fs.existsSync(path)) {
    // En caso que el archivo exista

    // Leer el archivo
    let message = fs.readFileSync(path, "utf-8"); // path del archivo, codificación
    console.log(`Mensaje: ${message}`);

    // Editar el archivo colocando un texto al final
    fs.appendFileSync(path, "\n2 - Otro mensaje agregado"); // Path del archivo, contenido que agregamos al archivo
    message = fs.readFileSync(path, "utf-8");
    console.log(message);

    // Eliminar el archivo
    fs.unlinkSync(path)

}
