const http = require("http");

const server = http.createServer((request, response) => {
    response.end("Respuesta desde mi primer servidor Backend !!!");
});

server.listen(8080, () => {
    console.log("Servidor escuchando el puerto 8080");
});
